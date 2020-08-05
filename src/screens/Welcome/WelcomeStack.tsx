/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './SplashScreen';
import {EditNameAndPlateScreen} from '../Profile/EditNameAndPlateScreen';
import {EnterMnemonicScreen} from '../Profile/EnterMnemonicScreen';
import { NewMnemonicScreen } from "../Profile/NewMnemonicScreen";

const Stack = createStackNavigator();

export type WelcomeStackParamList = {
  EnterCodeScreen: {phone: string};
};

export const WelcomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewMnemonicScreen"
        component={NewMnemonicScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnterMnemonicScreen"
        component={EnterMnemonicScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditNameAndPlateScreen"
        component={EditNameAndPlateScreen}
        options={{
          title: 'Welcome to Parking SV',
        }}
      />
    </Stack.Navigator>
  );
};
