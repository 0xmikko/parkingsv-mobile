/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {ParkingAction} from './index';

export const getTerms = (
  node: string,
): ThunkAction<void, RootState, unknown, ParkingAction> => async (dispatch) => {
  dispatch({type: 'PARKING_SET_NODE', payload: {node}});
};

export const sendSignedTx = () => {};

export const payParking = () => {};
