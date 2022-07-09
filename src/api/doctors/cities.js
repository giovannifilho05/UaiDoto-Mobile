import api from "../api";

export default async function getCities() {
  const result = await api.get('/users/doctors/cities')
  console.log(`getCities > Status ${result.status}`)
  
  if(result.status === 200) {
    const cities = result.data
    const ranamedCities = cities.map(city => ({ label: city.city, value: city.city }))
    
    return ranamedCities
  }

  return []
}