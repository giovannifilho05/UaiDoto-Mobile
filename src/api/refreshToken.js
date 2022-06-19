// import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "./api"

export default async function refreshToken() {

  const res = await api.post('/users/refresh-token')
  console.log('refreshToken > Status', res.status)

  if (res.status === 200) {
    const { token, refresh_token } = res.data

    await AsyncStorage.setItem('@UaiDoto_token', token)
    await AsyncStorage.setItem('@UaiDoto_refreshToken', refresh_token)
  }

  return res.status
}