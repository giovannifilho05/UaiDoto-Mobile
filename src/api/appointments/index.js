import api from "../api";
import getUser from "../getUser";

export async function createAppointments(data) {
  const result = await api.post('/appointments', data)
  console.log(`createAppointments > Status ${result.status}`)
  
  if(result.status === 201) {
    return result.data
  }

  return {}
}

export async function getAppointmentsWithMedicines(patientId) {
  const result = await api.get(`/appointments/patient/${patientId}/finished/medicines`)
  console.log(`getAppointmentsWithMedicines > Status ${result.status}`)

  if (result.status === 200) {
    const { content: appointments } = result.data
    return appointments
  }

  return []
}

export async function getAppointments(patientId) {
  const result = await api.get(`/appointments/patient/${patientId}`)
  console.log(`getAppointments > Status ${result.status}`)

  if (result.status === 200) {
    const { content: appointments } = result.data
    const doctors = {}

    const formattedAppointments = await Promise.all(appointments.map(async (appointment) => {
      const doctorId = appointment.doctorId

      if (!doctors[doctorId]) {
        const { name: doctorName } = await getUser(appointment.doctorId)
        doctors[doctorId] = doctorName
      }

      return { ...appointment, doctorName: doctors[doctorId] }
    }))

    return formattedAppointments
  }


  return {}
}

export async function handleAppointment(appointment, params) {
  const formatedAppointment = { ...appointment, processed: true, ...params };
  const result = await api.put('/appointments', formatedAppointment)

  if (result.status === 200) {
    return result.data
  }

  return []
}