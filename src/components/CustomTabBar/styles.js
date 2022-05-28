import styled from 'styled-components/native'

export const TabArea = styled.View`
  height: 60px;
  display: flex;
  background: ${props => props.theme.main};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ButtonTab = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Title = styled.Text`
  color: #fff;
`