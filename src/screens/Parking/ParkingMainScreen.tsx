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
import {OnParkingScreen} from '../../containers/Parking/OnParkingScreen';
import {ReadyScreen} from '../../containers/Parking/ReadyScreen';

export const ParkingMainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hashGet, setGetHash] = useState('0');
  const [hashAdd, setAddHash] = useState('0');

  const getProfile = () => {
    const newHash = Date.now().toString();
    dispatch(actions.profile.getProfile(newHash));
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
    console.log('On start parking');
  };

  return data.isParking ? (
    <OnParkingScreen started={data.startedAt} />
  ) : (
    <ReadyScreen amount={data.amount} />
  );
};
