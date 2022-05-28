import { useState } from 'react'
import { Text } from 'react-native';

import { Container, Content, TimeAvailable, TimeAvailableText } from "./styles";

export default function OpeningHours({avaliableTime, time, setTime}) {
  const [active, setActive] = useState(1);

  function handleActive(index, time) {
    setActive(index)
  }

  return (
    <Container
      horizontal={true}
    >
      <Content>
        {avaliableTime.map((time, index) => (
          <TimeAvailable
            key={index}
            onPress={() => handleActive(index, time)}
            active={active === index}
          >
            <TimeAvailableText >{time}</TimeAvailableText>
          </TimeAvailable>
        ))}

        {avaliableTime.length === 0 && <Text>Nenhum horário disponível</Text>}

      </Content>
    </Container>
  )
}