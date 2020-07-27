/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import {ParkingStack} from './Parking/ParkingStack';
import {SettingsStack} from './Settings/SettingsStack';
import {TransactionStack} from './Transactions/TransactionStack';

const Tab = createBottomTabNavigator();

const tabIcons: Record<string, string> = {
  Parking: 'ios-car-outline',
  Transactions: 'ios-card-outline',
  Settings: 'ios-settings',
};

export const Router: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = tabIcons[route.name] || '';

          // You can return any component that you like here!
          return (
            <Icon name={iconName} size={size} color={color} type={'ionicon'} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0176f4',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Parking" component={ParkingStack} />
      <Tab.Screen name="Transactions" component={TransactionStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};
