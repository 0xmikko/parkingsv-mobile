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

export const ParkingMainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hashGet, setGetHash] = useState('0');
  const [hashAdd, setAddHash] = useState('0');

  const getProfile = () => {
    const newHash = Date.now().toString();
    dispatch(actions.profile.getProfile());
    setGetHash(newHash);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const data = useSelector(profileSelector);
  const operationGet = useSelector(operationSelector(hashGet));
  const operationAdd = useSelector(operationSelector(hashAdd));

  // TODO: Move status to new Dataloader component

  useEffect(() => {
    if (hashAdd !== '0') {
      switch (operationAdd?.status) {
        case 'STATUS.SUCCESS':
          setAddHash('0');
          setTimeout(() => navigation.navigate('ContactsList'), 500);
          break;

        case 'STATUS.FAILURE':
          setAddHash('0');
        // alert("Cant submit your operation to server");
      }
    }
  }, [operationAdd]);

  const onScanQRCode = () => {
    navigation.navigate('QRScanScreen');
  };

  return data.isParking ? (
    <OnParkingView started={data.startedAt} />
  ) : (
    <ReadyView amount={data.amount} onQRCodeScan={onScanQRCode} />
  );
};
