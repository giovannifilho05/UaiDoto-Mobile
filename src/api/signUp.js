import api from "./api";

export default async function signUp(data) {
  console.log('SignUp', data)
  return api.post('/users', data)
} 