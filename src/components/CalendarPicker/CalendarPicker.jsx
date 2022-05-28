import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

import { Container, Content, CalendarOpenButton, CalendarOpenButtonText } from './styles'


export default function CalendarPicker({ date, setDate }) {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <Container>
      <Content>
        <CalendarOpenButton
          onPress={showDatepicker}
        >
          <CalendarOpenButtonText>Selecione o dia</CalendarOpenButtonText>
        </CalendarOpenButton>
        <CalendarOpenButtonText>Dia selecionado: {moment(date).format('DD/MM/YYYY')}</CalendarOpenButtonText>

        {show && (
          <DateTimePicker
            minimumDate={new Date()}
            value={date}
            mode={'date'}
            onChange={onChange}
          />
        )}
      </Content>
    </Container>
  );
}