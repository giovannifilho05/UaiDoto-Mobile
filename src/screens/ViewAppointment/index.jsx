import { Button, Text } from "react-native";
import moment from 'moment'

export default function ViewAppointment({ route }) {
  const { appointment } = route.params;

  return (
    <>
      <Text>{appointment.doctorName}</Text>
      <Text>{moment(appointment.dateTime).format('HH:mm')}</Text>
      <Text>{moment(appointment.dateTime).format('DD/MM/YYYY')}</Text>
      <Text>{appointment.doctorName}</Text>
      <Text>{appointment.doctorName}</Text>
      <Button
        // onPress={onPressLearnMore}
        title="Cancelar agendamento"
        color="#841584"
      />
    </>
  )
}