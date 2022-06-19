import { useState } from "react";
import { Text,  Modal } from "react-native";

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

export default function MedicineCard() {
  const [modalVisible, setModalVisible] = useState(false);
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
                <Action>
                  <Text>Confirmar</Text>
                </Action>
              </ModalActions>
            </ModalContent>
          </ModalContainer>
        </Modal>

        <MedicineData>
          <MedicineInfo>
            <Text>Nome</Text>
            <Text>20 gotas a fewiuf</Text>
          </MedicineInfo>
          <ClockImg></ClockImg>
          <MedicineTime>
            <Text>22:45</Text>
          </MedicineTime>
        </MedicineData>
        <Confirm onPress={() => setModalVisible(true)}>
          <CheckImg />
        </Confirm>
      </Content>
    </Container>
  );
}
