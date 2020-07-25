/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import React from 'react';
import {Text} from 'react-native-elements';
export interface OnParkingScreenProps {
  started: number;
}

export function OnParkingScreen({
  started,
}: OnParkingScreenProps): React.ReactElement {
  console.log(started);
  return <Text>Parking!!!</Text>;
}
