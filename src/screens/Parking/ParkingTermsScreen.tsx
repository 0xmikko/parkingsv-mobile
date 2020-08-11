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
import { parkingSelector } from "../../store/parking";

type ParkingTermsScreenRouteProp = RouteProp<
  ParkingStackParamList,
  'ParkingTermsScreen'
>;

export const ParkingTermsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hashGet, setGetHash] = useState('0');
  const [hashStart, setStartHash] = useState('0');

  const route = useRoute<ParkingTermsScreenRouteProp>();
  const {node, code} = route.params;

  console.log(node);

  const getTerms = () => {
    const newGetHash = Date.now().toString();
    dispatch(actions.parking.getTerms(node, code, newGetHash));
    setGetHash(newGetHash);
  };

  useEffect(() => {
    getTerms();
  }, []);

  const data = useSelector(parkingSelector);
  const operationGet = useSelector(operationSelector(hashGet));
  const operationSign = useSelector(operationSelector(hashStart));

  // TODO: Move status to new Dataloader component

  useEffect(() => {
    if (hashStart !== '0') {
      switch (operationSign?.status) {
        case 'STATUS.SUCCESS':
          setStartHash('0');
          navigation.navigate('ParkingMainScreen');
          break;

        case 'STATUS.FAILURE':
          setStartHash('0');
        // alert("Cant submit your operation to server");
      }
    }
  }, [operationSign]);

  const onAgreeTerms = () => {
    const newHash = Date.now().toString();
    dispatch(actions.parking.startParking(newHash));
    setStartHash(newHash);
    // navigation.navigate('ParkingMainScreen');
  };

  return <ParkingTermsView terms={data} onQRCodeScan={onAgreeTerms} />;
};
