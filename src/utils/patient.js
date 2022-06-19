import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from "jwt-decode";

export async function getPatientData() {
  const token = await AsyncStorage.getItem('@UaiDoto_token')
  return jwt_decode(token)
}