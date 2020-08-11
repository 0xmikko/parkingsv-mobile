/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect, useState} from 'react';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {operationSelector} from 'redux-data-connect';
import {profileSelector} from '../../store/profile';
import {OnParkingView} from '../../containers/Parking/OnParkingView';
import {ReadyView} from '../../containers/Parking/ReadyView';
import {parkingSelector} from '../../store/parking';

export const ParkingMainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hashGet, setGetHash] = useState('0');
  const [hashPay, setPayHash] = useState('0');

  const getProfile = () => {
    const newHash = Date.now().toString();
    dispatch(actions.profile.getProfile());
    setGetHash(newHash);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const data = useSelector(profileSelector);
  const parkingData = useSelector(parkingSelector);
  const operationGet = useSelector(operationSelector(hashGet));
  const operationPay = useSelector(operationSelector(hashPay));

  // TODO: Move status to new Dataloader component

  useEffect(() => {
    if (hashPay !== '0') {
      switch (operationPay?.status) {
        case 'STATUS.SUCCESS':
          setPayHash('0');
          // setTimeout(() => navigation.navigate('ContactsList'), 500);
          break;

        case 'STATUS.FAILURE':
          setPayHash('0');
        // alert("Cant submit your operation to server");
      }
    }
  }, [operationPay]);

  const onScanQRCode = () => {
    navigation.navigate('QRScanScreen');
  };

  const onPay = () => {
    const newHash = Date.now().toString();
    dispatch(actions.parking.payParking(newHash));
    setPayHash(newHash)
  };

  return parkingData.isParking ? (
    <OnParkingView started={parkingData.startedAt} onPayPressed={onPay} />
  ) : (
    <ReadyView amount={data.amount} onQRCodeScan={onScanQRCode} />
  );
};
