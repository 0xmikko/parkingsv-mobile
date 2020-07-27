/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import React from 'react';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '../../../styles';
import {Parking} from '../../core/parking';

export interface ReadyScreenProps {
  terms: Parking;
  onQRCodeScan: () => void;
}

export function ParkingTermsView({
  terms,
  onQRCodeScan,
}: ReadyScreenProps): React.ReactElement {
  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <Text>Parking Terms</Text>
      <Text>1h ... {terms.price1h}</Text>
      <Text>2h ... {terms.price2h}</Text>
      <Text>6h ... {terms.price24h}</Text>
      <Button onPress={onQRCodeScan} title={'Agree terms'} />
    </SafeAreaView>
  );
}
