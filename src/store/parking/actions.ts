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
  hash: string = '0',
): ThunkAction<void, RootState, unknown, ParkingAction> => async (dispatch) => {
  dispatch({type: 'PARKING_SET_NODE', payload: {node}});
  const endpoint = node + '/api/parking';
  return journaledOperation(
    createAction({
      endpoint,
      method: 'GET',
      types: [
        'PARKING_INFO_REQUEST',
        'PARKING_INFO_SUCCESS',
        'PARKING_INFO_FAIlURE',
      ],
    }),
    hash,
  );
};

export const sendSignedTx = () => {};

export const payParking = () => {};
