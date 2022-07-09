import { useState, useEffect } from 'react'

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
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    async function getAllAppointments() {
      const { sub: patientId } = await getPatientData()

      const appointments = await getAppointments(patientId)
      console.log(appointments)
      setAppointments(appointments)
    }
    getAllAppointments()
  }, [])

  return (
    <Container>
      <Content>
        {appointments.map((appointment, index) => {
          return (
            <AppointmentCard
              key={index}
              status={getStatus(appointment)}
              appointment={appointment}
              // doctorName={appointment.doctorName}
              // time={moment(appointment.dateTime).format('HH:mm')}
              // date={moment(appointment.dateTime).format('DD/MM/YYYY')}
            />
          )
        })}
      </Content>
    </Container>
  )
}