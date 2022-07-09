import { RefreshControl } from 'react-native'
import { useState, useEffect, useCallback } from 'react'

import { getAppointments } from '../../api/appointments'
import { getPatientData } from '../../utils/patient'
import AppointmentCard from '../../components/AppointmentCard'

import { Container, Content } from './styles'

function getStatus({ active, finished, processed }) {
  let status = { message: 'Aguardando', color: '#F4BC1C' }

  if (processed) {
    if (finished) {
      status = { message: 'Finalizado', color: '#06A94D' }
    } else if (active) {
      status = { message: 'Agendado', color: '#b4dc00' }
    } else {
      status = { message: 'Cancelado', color: '#da0202' }
    }
  }

  return status
}

export default function Appointments() {
  const [refreshing, setRefreshing] = useState(false)
  
  const [appointments, setAppointments] = useState([])

  async function getAllAppointments() {
    const { sub: patientId } = await getPatientData()

    const appointments = await getAppointments(patientId)
    console.log(appointments)
    setAppointments(appointments)
  }

  useEffect(() => {
    getAllAppointments()
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    console.log('Refreshing...')
    
    getAllAppointments()
      .then(() => setRefreshing(false))
  }, [])

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
        {appointments.map((appointment, index) => {
          return (
            <AppointmentCard
              key={index}
              status={getStatus(appointment)}
              appointment={appointment}
            />
          )
        })}

      </Content>
    </Container>
  )
}