import api from "../api";

export default async function getAppointments(patientId) {
  const result = await api.get(`/appointments/patient/${patientId}`)
  console.log(`getAppointments > Status ${result.status}`)
  
  if(result.status === 200) {


    return result.data.content
  }

  return {}
}