import { useEffect } from "react";
import { Text } from "react-native";
import refreshToken from "../../api/refreshToken";

import { Container } from "./styles";

export default function MyMedicines() {
  useEffect(() => {
    refreshToken()
  }, [])


  return(
    <Container>
      <Text>MyMedicines</Text>
    </Container>
  )
}