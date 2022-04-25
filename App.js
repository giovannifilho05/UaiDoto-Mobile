import React from 'react';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './src/theme';
import { ThemeProvider } from 'styled-components';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack'


export default () => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return (
            <></>
            // <AppLoading />
        );
    } else {
        return (
            <UserContextProvider>
                <NavigationContainer>
                    <ThemeProvider theme={theme}>
                        <MainStack />
                    </ThemeProvider>
                </NavigationContainer>
            </UserContextProvider>
        );
    }
} 