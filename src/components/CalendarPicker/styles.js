import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 10px;
`

export const Content = styled.View`

`

export const CalendarOpenButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.main};

`
export const CalendarOpenButtonText = styled.Text`
  color: ${(props) => props.theme.main};
  width: 100%;
  line-height: 40px;
  text-align: center;
`

