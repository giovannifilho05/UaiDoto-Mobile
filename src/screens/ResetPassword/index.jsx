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
  const [isSendEnabled, setIsSendEnabled] = useState(true);

  const navigation = useNavigation();


  useEffect(() => {
    if (email) {
      setIsSendEnabled(true);
    } else {
      setIsSendEnabled(false);
    }
  }, [email]);

  return (
    <Container>
      <HalfScreenBackground>
        <InitialImage width='100%' height='160' />
      </HalfScreenBackground>


      <ContentTitle>
        <Title>Esqueci minha senha</Title>
        <LinkButtom
          onPress={() => navigation.navigate('SignIn')}
        >
          <LinkButtomText>Entrar</LinkButtomText>
        </LinkButtom>
      </ContentTitle>

      <InputArea>
        <SignInput
          placeholder='E-mail'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
        />
        {/* <SignInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                /> */}

        <CustomButton disabled={!isSendEnabled}>
          <CustomButtonText>Enviar</CustomButtonText>
        </CustomButton>

        {/* <LinkButtom
                    onPress={() => navigation.navigate('ResetPassword')}
                >
                    <LinkButtomText>Esqueci minha senha</LinkButtomText>
                </LinkButtom> */}
      </InputArea>
    </Container>
  )
}