import { useEffect, useState } from "react"
import { getAppointmentsWithMedicines } from "../../api/appointments"
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import refreshToken from "../../api/refreshToken"

import MedicineCard from '../../components/MedicineCard'

import { Container, Content, Header, Texto } from "./styles"
import { getPatientData } from "../../utils/patient";

export default function MyMedicines() {
  const navigation = useNavigation()
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    refreshToken()
      .then(() => {
        getPatientData()
          .then(({ sub: patientId }) => {
            getAppointmentsWithMedicines(patientId)
              .then((appointments) => setAppointments(appointments))
          })
      })
      .catch(async (err) => {
        alert('Por favor, faça login novamente.')
        await AsyncStorage.removeItem('@UaiDoto_token')
        await AsyncStorage.removeItem('@UaiDoto_token_refresh')

        navigation.navigate('SignIn')
      })



  }, [])

  function handleTakingMedicine() {
    console.log('Taking medicine')
  }

  return (
    <Container>
      <Content>

        <Header><Texto>Diário</Texto></Header>
        {
          appointments.reduce((acc, appointment ) => {
            const medicines = appointment.medicines.map((medicine, index) => (
              <MedicineCard
                key={index}
                medicine={medicine}
                onTakingMedicine={handleTakingMedicine}
              />
            ))

            return [...acc, ...medicines]
          }, [])
        }

      </Content>
    </Container>
  )
}