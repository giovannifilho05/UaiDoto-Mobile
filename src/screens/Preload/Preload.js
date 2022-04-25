import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import InitialImage from '../../assets/inicialImage.svg';

import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.main};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      
      if(token) {
        //Validar token
      } else {
        navigation.navigate('SignIn');
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