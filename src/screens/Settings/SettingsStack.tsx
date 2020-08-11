/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {Profile} from '../../core/profile';
import {SettingsScreen} from './SettingsScreen';
import {ChangeNameScreen} from './ChangeNameScreen';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import actions from '../../store/actions';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {largeTitleStyles} from '../../../styles';

const Stack = createNativeStackNavigator();

export type SettingsStackParamList = {
  ChangeNameScreen: {data: Profile};
};

export const SettingsStack: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerRight: () => (
            <Button
              onPress={() => dispatch(actions.auth.logout())}
              title={'Logout'}
              type="clear"
            />
          ),
          ...largeTitleStyles,
        }}
      />
      <Stack.Screen
        name="ChangeNameScreen"
        component={ChangeNameScreen}
        options={{
          title: 'Changing name',
        }}
      />
    </Stack.Navigator>
  );
};
