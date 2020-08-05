/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '../../../styles';
import {useSelector} from 'react-redux';
import {profileSelector} from '../../store/profile';

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const {state} = useSelector(profileSelector);
  const finishSignUp = () => {
    switch (state) {
      default:
      case 'SPLASH':
      case 'NAME_NEEDED':
        navigation.navigate('EditNameAndPlateScreen');
        return;
      case 'WALLET_NEEDED':
        navigation.navigate('NewMnemonicScreen');
        return;
    }
  };

  return (
    <SafeAreaView
      style={{
        ...commonStyles.safeAreaContainerCentered,
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../../../logo.jpg')}
        style={{
          height: 200,
          resizeMode: 'contain',
          marginBottom: 8,
          marginTop: -40,
        }}
      />
      <Text h1>Parking SV</Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#687882',
          marginTop: 5,
        }}>
        Interplanetary Parking System
      </Text>
      <View style={styles.button}>
        <Button title="Login / Signup" onPress={finishSignUp} type="outline" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingTop: 50,
  },
});
