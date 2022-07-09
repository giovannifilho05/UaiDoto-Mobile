import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
`
export const Content = styled.View`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.main};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`



export const DoctorInfo = styled.View`
  width: 70%;
`
export const Status = styled.Text`
  width: 100px;
  background-color: ${props => props.statusColor || '#E5C33B'};
  color: white;
  text-align: center;
  border-radius: 10px;
`
export const DoctorName = styled.Text`
  margin: 10px 0 2px 0;
  font-size: 18px;
  color: ${(props) => props.theme.main};
` 



export const DateInfo = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Time = styled.View`
  margin: 0 5px 0 5px;
`