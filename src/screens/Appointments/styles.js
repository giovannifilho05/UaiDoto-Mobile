import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
`
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#DBDBE0',
    }
  }
})``