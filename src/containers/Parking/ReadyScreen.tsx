/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import React from 'react';
import {Button, Text} from 'react-native-elements';

export interface ReadyScreenProps {
  amount: number;
  onQRCodeScan: () => void;
}

export function ReadyScreen({
  amount,
  onQRCodeScan,
}: ReadyScreenProps): React.ReactElement {
  console.log(amount);
  return (
    <>
      <Text>Ready for parking</Text>
      <Button onPress={onQRCodeScan} title={'ScanQRCode'} />
    </>
  );
}
