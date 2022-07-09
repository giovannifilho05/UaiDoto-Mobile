import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '../components/CustomTabBar'

import SearchDoctor from '../screens/SearchDoctor'
import Appointments from '../screens/Appointments'
import Profile from '../screens/Profile'
import MyMedicines from '../screens/MyMedicines'
import ScheduleAppointment from '../screens/ScheduleAppointment'
import ViewAppointment from '../screens/ViewAppointment'

import { theme } from '../theme'

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="SearchDoctor"
    tabBar={props => <CustomTabBar {...props} />}
  >
    <Tab.Screen
      name="SearchDoctor"
      component={SearchDoctor}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name='ScheduleAppointment'
      component={ScheduleAppointment}
      options={{ headerTitle: 'Agende a sua consulta' }}
    />
    <Tab.Screen
      name='ViewAppointment'
      component={ViewAppointment}
      options={{ headerTitle: 'Sua consulta' }}
    />
    <Tab.Screen
      name="Appointments"
      component={Appointments}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="MyMedicines"
      component={MyMedicines}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
)