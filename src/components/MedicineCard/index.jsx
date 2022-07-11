import moment from "moment";
import { useState } from "react";
import { Text, Modal } from "react-native";

import CheckImg from "../../assets/check.svg";
import ClockImg from "../../assets/clock.svg";

import {
  Confirm,
  Container,
  Content,
  MedicineData,
  MedicineInfo,
  MedicineTime,
  ModalContent,
  ModalContainer,
  ModalActions,
  Action,
} from "./styles";

export default function MedicineCard({ medicine, onTakingMedicine }) {
  const [modalVisible, setModalVisible] = useState(false)

  const lastTakenDose = new Date(medicine.lastTakenDose)
  const nextDoseDate = new Date(medicine.lastTakenDose)
  nextDoseDate.setHours(lastTakenDose.getHours() + medicine.gap + 3)

  return (
    <Container>
      <Content>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ModalContainer>
            <ModalContent>
              <Text>Deseja registrar que tomou este medicamento?</Text>
              <ModalActions>
                <Action onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Cancelar</Text>
                </Action>
                <Action
                  onPress={() => {
                    onTakingMedicine()
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text>Confirmar</Text>
                </Action>
              </ModalActions>
            </ModalContent>
          </ModalContainer>
        </Modal>

        <MedicineData>
          <MedicineInfo>
            <Text>{medicine.name}</Text>
            <Text>{medicine.dose}</Text>
          </MedicineInfo>
          <ClockImg></ClockImg>
          <MedicineTime>
            <Text>{moment(nextDoseDate).format('HH:mm')}</Text>
          </MedicineTime>
        </MedicineData>
        <Confirm onPress={() => setModalVisible(true)}>
          <CheckImg />
        </Confirm>
      </Content>
    </Container>
  );
}
