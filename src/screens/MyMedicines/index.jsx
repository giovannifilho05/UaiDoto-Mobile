import MedicineCard from '../../components/MedicineCard'

import { Container , Content , Header , Texto} from "./styles";

export default function MyMedicines() {
  return(
    <Container>
      <Content>
      <Header><Texto>Diário</Texto></Header>
      <MedicineCard></MedicineCard>
      </Content>
      </Container>
  )
}