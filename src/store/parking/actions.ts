/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {ParkingAction} from './index';
import {journaledOperation} from 'redux-data-connect';
import {createAction} from 'redux-api-middleware';

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
  const endpoint = node + '/api/parking/start';
  const result = await dispatch(
    journaledOperation(
      createAction({
        endpoint,
        method: 'POST',
        body: {pubkey},
        types: [
          'PARKING_START_REQUEST',
          'PARKING_START_SUCCESS',
          'PARKING_START_FAIlURE',
        ],
      }),
      opHash,
    ),
  );

  console.log(result);
};

export const payParking = () => {};
