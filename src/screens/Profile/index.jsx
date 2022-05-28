import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native'

import { removeStoreData } from '../../utils/token'

import { Container } from './styles'

export default function Profile() {
  const navigation = useNavigation();

  async function logOut() {
    await removeStoreData('@UaiDoto_token')
    await removeStoreData('@UaiDoto_token_refresh')
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