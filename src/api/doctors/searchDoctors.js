import api from "../api";

export default async function searchDoctors(data = {}) {
    const result = await api.get('/users/doctors', data)

    console.log(`searchDoctors > Status ${result.status}`)

    if(result.status === 200) {
      return result.data?.content
    }

    return []
}