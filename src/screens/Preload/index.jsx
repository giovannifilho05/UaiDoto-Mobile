import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InitialImage from '../../assets/inicialImage.svg';

import styled from 'styled-components/native';
import { getStoreData } from '../../utils/token';

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;


export default function Preload() {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getStoreData('@UaiDoto_token')

        if (token) {
          //Validar token

          navigation.navigate('MainTab');
        } else {
          navigation.navigate('SignIn');
        }
      } catch (error) {
        alert('Erro ao tentar ler o token de acesso, tente novamente.')
      }
    }

    checkToken();
  }, []);

  return (
    <Container>
      <InitialImage width='100%' height='160' />
      <ActivityIndicator size='large' color='#000' />
    </Container>
  )
}