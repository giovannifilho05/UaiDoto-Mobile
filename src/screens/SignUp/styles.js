import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const MotivationTextContainer = styled.View`
    
`;

export const MotivationTextTitle = styled.Text`
    font-size: 24px;
`;
export const MotivationText = styled.Text`
    font-size: 18px;
`;

export const ContentTitle = styled.View`
    width:100%;
    padding: 0 20px; 
    margin-top:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #32264D;
`;

export const LinkButtom = styled.TouchableOpacity`
    
`;

export const LinkButtomText = styled.Text`
    color: ${props => props.theme.main};
`;

export const InputArea = styled.View`
    padding: 40px 20px;
    width: 100%;
`;

export const CustomView = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    border-radius: 15px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.disabled ? '#DCDCE5' : props.theme.main};
`;

export const CustonText = styled.Text`
    margin-left: 5px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    
    /* Desabilitado */
    /* color: #9C98A6; */
`;