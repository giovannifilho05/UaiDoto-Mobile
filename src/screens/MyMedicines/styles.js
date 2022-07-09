import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
` 

export const Content = styled.View`
` 

export const Header = styled.View`
  padding: 20px;
  background: ${props => props.theme.main};
`

export const Texto = styled.Text`
  color: #FFFFFF;
`
