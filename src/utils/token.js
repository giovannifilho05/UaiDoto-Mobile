import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async ({ name, value }) => {
  try {
    const jsonToken = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonToken)
  } catch (error) {
    return error
  }
}

export const getStoreData = async (name) => {
  try {
    const token = await AsyncStorage.getItem(name)

    return token
  } catch (error) {
    return error
  }
}


export const removeStoreData = async (name) => {
  try {
    await AsyncStorage.removeItem(name)
  } catch (error) {
    return error
  }
}