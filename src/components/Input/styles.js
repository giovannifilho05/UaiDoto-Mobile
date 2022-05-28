import styled from 'styled-components/native';

export const InputArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    padding: 5px 10px;
    background: #FAFAFC;
    border: 1px solid #E6E6F0;
    border-radius: 8px;
`;

export const Input = styled.TextInput`
    height: 100%;
    color: #9C98A6;
    font-size: 18px;
    flex: 1;
`;