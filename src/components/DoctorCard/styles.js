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

export const PersonalData = styled.View`
  flex: 1;
  padding: 10px;
`
export const Name = styled.Text`
  font-size: 18px;
`

export const Data = styled.Text`
  font-size: 14px;
`