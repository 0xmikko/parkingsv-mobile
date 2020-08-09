/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {ParkingAction} from './index';
import {journaledOperation} from 'redux-data-connect';
import {createAction} from 'redux-api-middleware';
import desc from 'parkingsv-contract/build/token_desc.json';
import { getContractInstance } from "../contract/actions";

export const getTerms = (
  node: string,
  opHash: string = '0',
): ThunkAction<void, RootState, unknown, ParkingAction> => async (dispatch) => {
  dispatch({type: 'PARKING_SET_NODE', payload: {node}});
  const endpoint = node + '/api/parking';
  return dispatch(
    journaledOperation(
      createAction({
        endpoint,
        method: 'GET',
        types: [
          'PARKING_INFO_REQUEST',
          'PARKING_INFO_SUCCESS',
          'PARKING_INFO_FAIlURE',
        ],
      }),
      opHash,
    ),
  );
};

export const startParking = (
  opHash: string = '0',
): ThunkAction<void, RootState, unknown, ParkingAction> => async (
  dispatch,
  getState,
) => {
  const state = getState();
  const node = state.parking.node;
  const pubkey = state.profile.publicKey;
  console.log(pubkey);
  const endpoint = node + '/api/parking/start';
  await dispatch(
    journaledOperation(
      createAction({
        endpoint,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({pubkey}),
        types: [
          'PARKING_START_REQUEST',
          'PARKING_START_SUCCESS',
          'PARKING_START_FAIlURE',
        ],
      }),
      opHash,
    ),
  );
};

export const payParking = (
  opHash: string = '0',
): ThunkAction<void, RootState, unknown, ParkingAction> => async (
  dispatch,
  getState,
) => {
  const state = getState();
  const node = state.parking.node;
  const HOUR = 60 * 60 * 1000;
  const timeConsumedHR = (Date.now() - state.parking.startedAt) / HOUR;
  const sumToPay = state.parking.price1h * timeConsumedHR;
  console.log(desc);
  console.log(sumToPay);

  const contract = getContractInstance();
  if (contract === undefined) {
    console.log('FAIUL');
    throw new Error('Contract is not initialized!');
  }
  console.log('LEDGER!!!', contract.ledger.toString());
};
