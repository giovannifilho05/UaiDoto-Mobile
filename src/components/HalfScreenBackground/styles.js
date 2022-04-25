import styled from  'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    padding: 20px;
    background-color: ${props => props.theme.main};
`;