import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container } from './styles'

export default function Profile() {
  const navigation = useNavigation();

  async function logOut() {
    await AsyncStorage.removeItem('@UaiDoto_token')
    await AsyncStorage.removeItem('@UaiDoto_token_refresh')

    navigation.navigate('SignIn')
  }
  
  function handleLogOut() {
    logOut()
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <Text>Profile</Text>
      <Button
        title='LogOut'
        onPress={handleLogOut}
      />
    </Container>
  )
}