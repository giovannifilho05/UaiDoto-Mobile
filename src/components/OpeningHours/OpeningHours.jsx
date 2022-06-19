import { useState } from 'react'
import { Text } from 'react-native';

import { Container, Content, TimeAvailable, TimeAvailableText } from "./styles";

function formatTime(time) {
  let formattedHour = time.split(':')[0].length === 1 ? '0' + time.split(':')[0] : time.split(':')[0]
  let formattedMinute = time.split(':')[1].length === 1 ? time.split(':')[1].toString() + '0' : time.split(':')[1]

  let formattedTime = formattedHour + ':' + formattedMinute

  return formattedTime
}

export default function OpeningHours({ avaliableTime, setTime }) {
  const [active, setActive] = useState(1);

  function handleActive(index, time) {
    setActive(index)
    setTime(time)
  }

  return (
    <Container
      horizontal={true}
    >
      <Content>
        {avaliableTime.map((time, index) => (
          <TimeAvailable
            key={index}
            onPress={() => handleActive(index, formatTime(time))}
            active={active === index}
          >
            <TimeAvailableText >{formatTime(time)}</TimeAvailableText>
          </TimeAvailable>
        ))}

        {avaliableTime.length === 0 && <Text>Nenhum horário disponível</Text>}

      </Content>
    </Container>
  )
}