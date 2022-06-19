import api from "../api";

export default async function createAppointments(data) {
  const result = await api.post('/appointments', data)
  console.log(`createAppointments > Status ${result.status}`)
  
  if(result.status === 201) {
    return result.data
  }

  return {}
}