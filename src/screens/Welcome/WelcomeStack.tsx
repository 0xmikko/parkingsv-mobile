/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './SplashScreen';
import {EditNameAndPlateScreen} from '../Profile/EditNameAndPlateScreen';
import {EnterMnemonicScreen} from '../Profile/EnterMnemonicScreen';

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
        name="PhoneScreen"
        component={EnterMnemonicScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="EnterCodeScreen" component={EditNameAndPlateScreen} />
    </Stack.Navigator>
  );
};
