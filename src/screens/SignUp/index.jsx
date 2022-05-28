import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

import signUp from '../../api/signUp'

import {
    Container,
    ContentTitle,
    Title,
    MotivationTextContainer,
    MotivationTextTitle,
    MotivationText,
    InputArea,
    CustonText,
    CustomView,
    CustomButton,
    CustomButtonText,
    LinkButtom,
    LinkButtomText,
} from './styles';

import SignInput from '../../components/SignInput';
import HalfScreenBackground from '../../components/HalfScreenBackground';

export default function SignUp() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isChecked, setChecked] = useState(true);
    const [gender, setGender] = useState(0);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [step, setStep] = useState(0);
    const [isNextStepEnabled, setIsNextStepEnabled] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        if (name && phone) {
            setIsNextStepEnabled(true);
        } else {
            setIsNextStepEnabled(false);
        }
    }, [name, phone]);

    function handleSubmit() {
        signUp({ name, phone, email, password, gender })
            .then((success) => {
                if (success.status === 201) {
                    alert("Cadastro realizado com sucesso!")
                    navigation.navigate('SignIn')
                }
            })
            .catch((err) => {
                alert("Algo deu errado :(");
                console.log(err)
            })
    }

    function handleCheckBoxChange(isChecked) {
        setChecked(isChecked)
        setGender(isChecked ? 0 : 1)
    }

    return (
        <Container>
            <HalfScreenBackground>
                <MotivationTextContainer>
                    <MotivationTextTitle>
                        Crie sua conta
                    </MotivationTextTitle>
                    <MotivationText>
                        {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. */}
                        Crie sua conta e conecte-se com os melhores médicos da região.
                    </MotivationText>
                </MotivationTextContainer>
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
                            placeholder='Telefone'
                            onChangeText={setPhone}
                            value={phone}
                        />
                        <CustomView>
                            <CustomView>
                                <Checkbox value={isChecked} onValueChange={handleCheckBoxChange} />
                                <CustonText>Masculino</CustonText>
                            </CustomView>
                            <CustomView>
                                <Checkbox value={!isChecked} onValueChange={(isChecked) => handleCheckBoxChange(!isChecked)} />
                                <CustonText>Feminino</CustonText>
                            </CustomView>
                        </CustomView>
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
                        <SignInput
                            placeholder='Confirme sua Senha'
                            secureTextEntry={true}
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                        />
                    </>
                }

                {step < 1 &&
                    <CustomButton
                        disabled={!isNextStepEnabled}
                        onPress={() => setStep(step + 1)}
                    >
                        <CustomButtonText>Próximo</CustomButtonText>
                    </CustomButton>
                }

                {step >= 1 &&
                    <CustomButton
                        onPress={handleSubmit}
                    >
                        <CustomButtonText>Concluir</CustomButtonText>
                    </CustomButton>
                }
            </InputArea>
        </Container>
    );

}