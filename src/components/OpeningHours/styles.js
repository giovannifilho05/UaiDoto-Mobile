import styled from 'styled-components/native'
import { transparentize } from 'polished'


export const Container = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#110000',
    }
  }
})``

export const Content = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
`

export const TimeAvailable = styled.TouchableOpacity`
  width: 70px;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.main};
  border-radius: 5px;

  background-color: ${({ active, theme }) => active
    ? transparentize(0.8, theme.main)
    : 'transparent'};
`
export const TimeAvailableText = styled.Text`
  width: 100%;
  text-align: center;
  line-height: 40px;

  color: ${(props) => props.theme.main};
`