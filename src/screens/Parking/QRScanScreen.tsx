/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import QRCodeScanner, {Event} from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';

export const QRScanScreen: React.FC = () => {
  const navigation = useNavigation();

  const onSuccess = (e: Event | null) => {
    // const qrcode = e.data as string;
    navigation.navigate('ParkingTermsScreen', {
      node: 'http://192.168.88.253:4000',
    });
  };
  return (
    // <Text>Hello!</Text>
    <QRCodeScanner
      onRead={onSuccess}
      topContent={
        <View style={styles.container}>
          <Text>Scan QR-code for parking</Text>
        </View>
      }
      bottomContent={
        <View style={styles.container}>
          <Button title="Scan QR-Code" onPress={() => onSuccess(null)} />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    width: '100%',
  },
});
