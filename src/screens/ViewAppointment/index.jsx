import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { handleAppointment } from "../../api/appointments";
import { Container, Content, TextInfo } from "./styles";
import Button from "../../components/Button";

export default function ViewAppointment({ route }) {
  const { appointment } = route.params;
  const navigation = useNavigation();

  function handleCancelAppointment() {
    handleAppointment(appointment, {
      active: false,
      finished: false,
      observations: "Cancelado pelo paciente.",
    })
      .then(() => {
        navigation.navigate("Appointments");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Content>
        <TextInfo>Médico: {appointment.doctorName}</TextInfo>
        <TextInfo>
          Data: {moment(appointment.dateTime).format("DD/MM/YYYY")} às{" "}
          {moment(appointment.dateTime).format("HH:mm")}
        </TextInfo>
        <TextInfo>{appointment.observation}</TextInfo>

        {appointment.finished === false && appointment.active === true && (
          <Button
            onPress={handleCancelAppointment}
            label="Cancelar agendamento"
          />
        )}
      </Content>
    </Container>
  );
}
