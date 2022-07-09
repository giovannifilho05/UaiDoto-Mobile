import api from "./api";

export default async function getUser(userId) {
  const result = await api.get(`/users/${userId}`)
  console.log(`getUser > Status ${result.status}`)
  
  if(result.status === 200) {
    return result.data
  }

  return {}
}