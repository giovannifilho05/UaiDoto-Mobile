import { useNavigation } from '@react-navigation/native'

import { Container, Content, DateInfo, DoctorInfo, Status, DoctorName } from './styles'

export default function AppointmentCard() {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() => {
        // navigation.navigate('')
      }}
    >
      <Content>
        <DoctorInfo>
          <Status>Finalizado</Status>
          <DoctorName>José Maria Mamão</DoctorName>
        </DoctorInfo>
        <DateInfo>

        </DateInfo>

      </Content>
    </Container>
  )
}