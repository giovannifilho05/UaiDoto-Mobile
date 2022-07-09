import { useEffect, useState, useCallback } from "react"
import { RefreshControl, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import refreshToken from "../../api/refreshToken"
import { getAppointmentsWithMedicines, handleAppointment } from "../../api/appointments"

import MedicineCard from '../../components/MedicineCard'

import { Container, Content, Header, Texto } from "./styles"
import { getPatientData } from "../../utils/patient"

function filterAppointments(appointments) {
  return appointments.filter(appointment => {
    return appointment.medicines.some((medicine) => {
      if (!medicine.lastTakenDose) {
        return false
      }

      const lastTakenDose = new Date(medicine.lastTakenDose)
      const nextDoseDate = new Date(medicine.lastTakenDose)
      nextDoseDate.setHours(lastTakenDose.getHours() + medicine.gap)

      const today = new Date()
      console.log(nextDoseDate.getDate() === today.getDate())
      return nextDoseDate.getDate() === today.getDate()
    })
  })
}


export default function MyMedicines() {
  const [refreshing, setRefreshing] = useState(false)

  const navigation = useNavigation()
  const [appointments, setAppointments] = useState([])

  async function getMedicines() {
    return refreshToken()
      .then(() => {
        getPatientData()
          .then(({ sub: patientId }) => {
            getAppointmentsWithMedicines(patientId)
              .then((appointments) => setAppointments(filterAppointments(appointments)))
          })
      })
      .catch(async (err) => {
        alert('Por favor, faça login novamente.')
        await AsyncStorage.removeItem('@UaiDoto_token')
        await AsyncStorage.removeItem('@UaiDoto_token_refresh')

        navigation.navigate('SignIn')
      })
  }

  useEffect(() => {
    getMedicines()
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    console.log('Refreshing...')

    getMedicines()
      .then(() => setRefreshing(false))
  }, [])

  function handleTakingMedicine(appointment, medicineIndex) {
    console.log('Taking medicine')

    const medicines = appointment.medicines
    const lastTakenDose = new Date()
    lastTakenDose.setHours(lastTakenDose.getHours() - 3)
    const takenDoses = medicines[medicineIndex].takenDoses + 1

    medicines[medicineIndex] = { ...medicines[medicineIndex], lastTakenDose, takenDoses }

    handleAppointment(appointment, { medicines })
  }

  return (
    <Container>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >

        <Header><Texto>Diário</Texto></Header>
        {
          appointments.reduce((acc, appointment) => {
            const medicines = appointment.medicines.map((medicine, medicineIndex) => {
              if (!medicine.lastTakenDose || medicine.takenDoses === medicine.doseQuantity) {
                return false
              } else {
                const lastTakenDose = new Date(medicine.lastTakenDose)
                const nextDoseDate = new Date(medicine.lastTakenDose)
                nextDoseDate.setHours(lastTakenDose.getHours() + medicine.gap)

                const today = new Date()
                if (nextDoseDate.getDate() !== today.getDate()) {
                  return false
                }
              }

              return <MedicineCard
                key={medicineIndex}
                medicine={medicine}
                onTakingMedicine={() => handleTakingMedicine(appointment, medicineIndex)}
              />
            })

            return [...acc, ...medicines]
          }, [])
        }

        {appointments.length === 0 && <Text>Nenhum medicamento para ser tomado hoje.</Text>}

      </Content>
    </Container>
  )
}