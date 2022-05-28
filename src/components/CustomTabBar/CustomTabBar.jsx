import { TabArea, ButtonTab, Title } from './styles'

import SeachIcon from '../../assets/search.svg'
import AppointmentsIcon from '../../assets/appointment.svg'
import MyMedicinesIcon from '../../assets/pill.svg'
import ProfileIcon from '../../assets/profile.svg'

export default function CustomTabBar({navigation}) {
  function handleOnPress(screenName) {
    navigation.navigate(screenName)
  }

  return (
    <TabArea>
      <ButtonTab
        onPress={() => handleOnPress('SearchDoctor')}
      >
        <SeachIcon />
        <Title>Buscar</Title>
      </ButtonTab>

      <ButtonTab
        onPress={() => handleOnPress('Appointments')}
      >
        <AppointmentsIcon />
        <Title>Agenda</Title>
      </ButtonTab>
      
      <ButtonTab
        onPress={() => handleOnPress('MyMedicines')}
      >
        <MyMedicinesIcon />
        <Title>Remédios</Title>
      </ButtonTab>

      <ButtonTab
        onPress={() => handleOnPress('Profile')}
      >
        <ProfileIcon />
        <Title>Perfil</Title>
      </ButtonTab>
    </TabArea>
  )
}