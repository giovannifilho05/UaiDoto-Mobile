import styled from 'styled-components/native'

export const Container = styled.View`
  flex-grow: 1;
  height: 45px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: ${({isFirst}) => isFirst ? '10px': 0 };
`
