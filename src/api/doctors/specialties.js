import api from "../api";

export default async function getSpecialties() {
  const result = await api.get('/users/doctors/specialties')
  console.log(`getSpecialties > Status ${result.status}`)
  
  if(result.status === 200) {
    const specialties = result.data
    const ranamedSpecialties = specialties.map(specialty => ({ label: specialty.specialty, value: specialty.id }))
    
    return ranamedSpecialties
  }

  return []
}