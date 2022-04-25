import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ContentTitle,
    Title,
    InputArea,
    CustomButton,
    CustomButtonText,
    LinkButtom,
    LinkButtomText,
} from './styles';

import InitialImage from '../../assets/Telemedicine_SVG.svg';

import SignInput from '../../components/SignInput';
import HalfScreenBackground from '../../components/HalfScreenBackground';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginEnabled, setIsLoginEnabled] = useState(true);

    const navigation = useNavigation();


    useEffect(() => {
        if (email && password) {
            setIsLoginEnabled(true);
        } else {
            setIsLoginEnabled(false);
        }
    }, [email, password]);

    return (
        <Container>
            <HalfScreenBackground>
                <InitialImage width='100%' height='160' />
            </HalfScreenBackground>


            <ContentTitle>
                <Title>Fazer login</Title>
                <LinkButtom onPress={() => navigation.navigate('SignUp')}>
                    <LinkButtomText>Criar uma conta</LinkButtomText>
                </LinkButtom>
            </ContentTitle>

            <InputArea>
                <SignInput
                    placeholder='E-mail'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <SignInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />

                <CustomButton disabled={!isLoginEnabled}>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>

                <LinkButtom
                    onPress={() => navigation.navigate('ResetPassword')}
                >
                    <LinkButtomText>Esqueci minha senha</LinkButtomText>
                </LinkButtom>
            </InputArea>
        </Container>
    )
}