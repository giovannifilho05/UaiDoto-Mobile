import { Container, Content, Label } from "./styles";

export default function Button({ label }) {
  return (
    <Container>
      <Content>
        <Label>{label}</Label>
      </Content>
    </Container>
  )
}