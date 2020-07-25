/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {ParkingMainScreen} from './ParkingMainScreen';
import {QRScanScreen} from './QRScanScreen';
import {largeTitleStyles} from '../../../styles';
const Stack = createNativeStackNavigator();

export const ParkingStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ParkingMainScreen"
        component={ParkingMainScreen}
        options={{
          title: 'Parking SV',
          ...largeTitleStyles,
        }}
      />
      <Stack.Screen
        name="QRScreen"
        component={QRScanScreen}
        options={{
          title: 'Scan QR code',
        }}
      />
    </Stack.Navigator>
  );
};
