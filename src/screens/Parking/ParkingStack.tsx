/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {ParkingMainScreen} from './ParkingMainScreen';
import {QRScanScreen} from './QRScanScreen';
import {largeTitleStyles} from '../../../styles';
import { ParkingTermsScreen } from "./ParkingTermsScreen";
const Stack = createNativeStackNavigator();

export type ParkingStackParamList = {
  ParkingTermsScreen: {node: string};
};

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
        name="ParkingTermsScreen"
        component={ParkingTermsScreen}
        options={{
          title: 'Terms',
          ...largeTitleStyles,
        }}
      />
      <Stack.Screen
        name="QRScanScreen"
        component={QRScanScreen}
        options={{
          title: 'Scan QR code',
        }}
      />
    </Stack.Navigator>
  );
};
