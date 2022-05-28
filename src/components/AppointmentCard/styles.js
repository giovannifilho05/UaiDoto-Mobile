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
`

export const DoctorInfo = styled.View`
  width: 70%;
  /* border: ${props => props.theme.main}; */
  border-right-width: 1px;
  border-right-color:${props => props.theme.main};
`
export const Status = styled.Text`
  width: 100px;
  background-color: #06A94D;
  color: white;
  text-align: center;
  border-radius: 10px;
`
export const DoctorName = styled.Text`
  margin: 10px 0;
  font-size: 18px;
  color: ${(props) => props.theme.main};
`

export const DateInfo = styled.View`
  flex: 1;
  height: 100%;
  background-color: red;
`