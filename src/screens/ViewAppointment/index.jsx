import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from 'moment'
import { handleAppointment } from "../../api/appointments";

export default function ViewAppointment({ route }) {
  const { appointment } = route.params;
  const navigation = useNavigation()

  function handleCancelAppointment() {
    handleAppointment(appointment, {
      active: false,
      finished: false,
      observations: 'Cancelado pelo paciente.'
    }).then(() => {
      navigation.navigate('Appointments')
    }).catch(err => console.log(err))
  }

  return (
    <>
      <Text>{appointment.doctorName}</Text>
      <Text>{moment(appointment.dateTime).format('HH:mm')}</Text>
      <Text>{moment(appointment.dateTime).format('DD/MM/YYYY')}</Text>
      <Text>{appointment.observation}</Text>

      {
        appointment.finished === false && appointment.active === true &&
        <Button
          onPress={handleCancelAppointment}
          title="Cancelar agendamento"
          color="#841584"
        />
      }

    </>
  )
}