import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

import submitLogin from '../../api/signIn';
import { testRegex } from '../../utils/fieldTreatment';

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
  const [email, setEmail] = useState('giovanni@filho.com');
  const [password, setPassword] = useState('1234');
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);

  const navigation = useNavigation();

  function handleSubmit() {
    if (!testRegex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi, email)) {
      alert('Por favor, verifique o e-mail');
    } else if (!password) {
      alert('Por favor, verifique a senha');
    } else {
      submitLogin(email, password)
        .then((result) => {
          const token = result.data.token
          const { roles } = jwt_decode(token)

          if(roles.includes('patient')) {
            return result.data
          }
          throw new Error('Usuário não autorizado.')
        })
        .then(async ({ token, refresh_token }) => {
          if (token) {
            console.log('Salvando tokens: ', token)

            await AsyncStorage.setItem('@UaiDoto_token', token)
            await AsyncStorage.setItem('@UaiDoto_refreshToken', refresh_token)
            
            
            console.log('Tokens salvos')
          } else {
            throw new Error('Usuário não encontrado.')
          }

        }).then(() => {
          navigation.navigate("MainTab");
        })
        .catch((error) => {
          alert(error.message)
          console.log(error.message);
        });
    }

  }

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

        <CustomButton
          disabled={!isLoginEnabled}
          onPress={handleSubmit}
        >
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