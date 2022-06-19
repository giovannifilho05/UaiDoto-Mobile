import { useEffect } from 'react'
import getAppointments from '../../api/appointments/getAppointments'
import AppointmentCard from '../../components/AppointmentCard'
import { getPatientData } from '../../utils/patient'
import { Container } from './styles'

export default function Appointments() {
  useEffect(() => {
    async function getAllAppointments() {
      const { sub: patientId } = await getPatientData()

      const appointments = await getAppointments(patientId)
      console.log(appointments)
    }
    getAllAppointments()
  }, [])


  return (
    <Container>
      <AppointmentCard />
    </Container>
  )
}