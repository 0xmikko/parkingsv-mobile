/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {commonStyles} from '../../../styles';
import moment from 'moment';

export interface OnParkingScreenProps {
  started: number;
  onPayPressed: () => void;
}

export function OnParkingView({
  started,
  onPayPressed,
}: OnParkingScreenProps): React.ReactElement {

  const [parkingTime, setParkingTime] = useState(Date.now() - started - 3*60*60*1000);
  const [timer, setTimer] = useState<NodeJS.Timeout>(
    setInterval(() => setParkingTime(Date.now() - started - 3*60*60*1000), 1000),
  );

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  const timeFmt = moment(parkingTime).format('HH:mm:ss');
  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <View style={styles.amountView}>
        <Text style={styles.amount}>{timeFmt}</Text>
      </View>
      <View style={styles.scanButtonView}>
        <Button
          buttonStyle={styles.scanButtonContainer}
          titleStyle={styles.scanButtonTitle}
          onPress={onPayPressed}
          title={'Pay'}
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
