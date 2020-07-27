/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import React from 'react';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {commonStyles} from '../../../styles';

export interface ReadyScreenProps {
  amount: number;
  onQRCodeScan: () => void;
}

export function ReadyView({
  amount,
  onQRCodeScan,
}: ReadyScreenProps): React.ReactElement {
  console.log(amount);
  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <View style={styles.amountView}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <View style={styles.scanButtonView}>
        <Button
          buttonStyle={styles.scanButtonContainer}
          titleStyle={styles.scanButtonTitle}
          onPress={onQRCodeScan}
          title={'Scan Parking Code'}
        />
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  amountView: {
    marginTop: 20,
    marginBottom: 20,
  },
  amount: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#000',
  },
  scanButtonView: {
    width: '80%',
    height: '20%',
  },
  scanButtonContainer: {
    borderRadius: 12,

    textAlignVertical: 'center',
  },
  scanButtonTitle: {
    height: 100,
    flex: 1,
    textAlignVertical: 'center',

  },
});
