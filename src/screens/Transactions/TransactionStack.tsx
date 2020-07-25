/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {TransactionsListScreen} from './TransactionsListScreen';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {largeTitleStyles} from '../../../styles';

const Stack = createNativeStackNavigator();

export const TransactionStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsListScreen"
        component={TransactionsListScreen}
        options={{
          title: 'Transactions',
          ...largeTitleStyles,
        }}
      />
    </Stack.Navigator>
  );
};
