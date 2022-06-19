import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 10px;
`
export const Content = styled.View`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.main};
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const MedicineData = styled.View`
  flex: 1;
  flex-direction: row;
  border-right-width: 1px;
  border-right-color: ${props => props.theme.main};
  padding-vertical: 20px;
  align-items: center;
`
export const MedicineInfo = styled.View`
  flex: 1;
  padding-left: 18px;
`
export const MedicineTime = styled.View`
  padding-horizontal: 7px;
`

export const Confirm = styled.TouchableOpacity`
  padding: 20px;
`
export const ModalContainer = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.View`
  background: #c8d0d5;
  border: 1px solid ${props => props.theme.main};
  align-items: center;
  height: 150px;
  width: 270px;
  border-radius: 7px;
  padding: 20px;
`
export const ModalActions = styled.View`
  flex-direction: row;
  margin-top: 25px;
`

export const Action = styled.Pressable`
  border-radius: 7px;
  padding: 10px; 
  width: 90px; 
  align-items: center;
  margin-horizontal: 15px;
  background: ${props => props.theme.main};
`

