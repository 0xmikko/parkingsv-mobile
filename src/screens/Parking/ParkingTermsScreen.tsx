/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect, useState} from 'react';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import {operationSelector} from 'redux-data-connect';
import {profileSelector} from '../../store/profile';
import {ParkingTermsView} from '../../containers/Parking/ParkingTermsView';
import {ParkingStackParamList} from './ParkingStack';

type ParkingTermsScreenRouteProp = RouteProp<
  ParkingStackParamList,
  'ParkingTermsScreen'
>;

export const ParkingTermsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hashGet, setGetHash] = useState('0');
  const [hashAdd, setAddHash] = useState('0');

  const route = useRoute<ParkingTermsScreenRouteProp>();
  const {node} = route.params;

  console.log(node);

  const getTerms = () => {
    const newGetHash = Date.now().toString();
    dispatch(actions.parking.getTerms(node));
    setGetHash(newGetHash);
  };

  useEffect(() => {
    getTerms();
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

  return <ParkingTermsView amount={} onQRCodeScan={} />;
};
