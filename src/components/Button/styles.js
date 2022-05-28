import styled from 'styled-components/native'
import { transparentize } from 'polished'

export const Container = styled.View`
  margin: 10px;
`

export const Content = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme?.main};
  height: 45px;
  border-radius: 8px;
` 

export const Label = styled.Text`
  width: 100%;
  line-height: 45px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme?.main};
  background-color: ${(props) => transparentize(0.9 ,props.theme?.main)}
`