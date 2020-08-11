/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import React from 'react';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView, View} from 'react-native';
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
      <Text style={{textAlign: 'center', fontSize:24}}>Parking Terms</Text>
      <View style={{width: '80%', marginTop: 20}}>
      <Text style={{textAlign: 'center', fontSize: 18}}>1h ... {terms.price1h}</Text>
      <Text style={{textAlign: 'center', fontSize: 18}}>2h ... {terms.price2h}</Text>
      <Text style={{textAlign: 'center', fontSize: 18}}>6h ... {terms.price24h}</Text>
      </View>
      <View style={{width: '80%', marginTop: 20}}>
        <Button onPress={onQRCodeScan} title={'Agree terms'} />
      </View>
    </SafeAreaView>
  );
}
