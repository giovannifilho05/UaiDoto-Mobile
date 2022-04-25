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

import SignInput from '../../components/SignInput';
import HalfScreenBackground from '../../components/HalfScreenBackground';
import { Text } from 'react-native';

export default () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(0);
    const [isNextStepEnabled, setIsNextStepEnabled] = useState(true);

    const navigation = useNavigation();


    useEffect(() => {
        if (name && surname) {
            setIsNextStepEnabled(true);
        } else {
            setIsNextStepEnabled(false);
        }
    }, [name, surname]);



    return (
        <Container>
            <HalfScreenBackground>
                <Text>Crie sua conta</Text>
            </HalfScreenBackground>


            <ContentTitle>
                <Title>01. Quem é você?</Title>

                <LinkButtom 
                onPress={() => navigation.navigate('SignIn')}
                >
                    <LinkButtomText>Entrar</LinkButtomText>
                </LinkButtom>
            </ContentTitle>

            <InputArea>


                {step === 0 &&
                    <>
                        <SignInput
                            placeholder='Nome'
                            onChangeText={setName}
                            value={name}
                        />
                        <SignInput
                            placeholder='Sobrenome'
                            onChangeText={setSurname}
                            value={surname}
                        />
                    </>
                }
                {step === 1 &&
                    <>
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
                    </>
                }

                {step === 2 && <Text>Cadastro concluído.</Text>}

                <CustomButton disabled={!isNextStepEnabled} onPress={() => setStep(step + 1)}>
                    <CustomButtonText>Próximo</CustomButtonText>
                </CustomButton>
            </InputArea>
        </Container>
    );

}