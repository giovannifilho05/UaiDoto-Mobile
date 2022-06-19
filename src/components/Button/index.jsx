import { Container, Content, Label } from "./styles";

export default function Button({ label, ...props }) {
  return (
    <Container>
      <Content
      {...props}
      >
        <Label>{label}</Label>
      </Content>
    </Container>
  )
}