import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
` 

export const Content = styled.View`
` 

export const SearchMenu = styled.View`
  height: 140px;
  padding: 15px;
  background: ${props => props.theme.main};
`

export const DropDownArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const CardArea = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#DBDBE0',
    }
  }
})``