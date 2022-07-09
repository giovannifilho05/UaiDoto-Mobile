import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

import ClockImg from '../../assets/clock.svg'
import { Container, Content, DateInfo, DoctorInfo, Status, DoctorName, Time } from './styles'

export default function AppointmentCard({ status, appointment }) {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() => {
        navigation.navigate('ViewAppointment', { appointment });
      }}
    >
      <Content>
        <DoctorInfo>
          <Status statusColor={status.color} >{status.message}</Status>
          <DoctorName>{appointment.doctorName}</DoctorName>
        </DoctorInfo>

        <DateInfo>
          <ClockImg />
          <Time>
            <Text>{moment(appointment.dateTime).format('HH:mm')}</Text>
            <Text>{moment(appointment.dateTime).format('DD/MM/YYYY')}</Text>
          </Time>
        </DateInfo>

      </Content>
    </Container>
  )
}