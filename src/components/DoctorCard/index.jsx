import { useNavigation } from '@react-navigation/native'

import { Container, Content, PersonalData, Name, Data } from './styles'
import DoctorImg from '../../assets/doctor.svg'

export default function DoctorCard({ doctor }) {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() => {
        navigation.navigate('ScheduleAppointment', { doctor });
      }}
    >
      <Content>
        <DoctorImg />
        <PersonalData >
          <Name>{doctor.name}</Name>
          <Data>{doctor.specialty}</Data>
          <Data>{`${doctor.address.street}, nº ${doctor.address.number}}`}</Data>
          <Data>{doctor.address.city}</Data>
        </PersonalData>
      </Content>
    </Container>
  )
}