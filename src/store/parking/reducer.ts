/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {Parking} from '../../core/parking';
import {ParkingAction} from './';

export interface ParkingState extends Parking {}

const initialState: ParkingState = {
  id: '',
  name: 'Loading',
  node: '',
  price1h: 0,
  price2h: 0,
  price24h: 0,
  pubkey: '',
};

export default function createReducer(
  state: ParkingState = initialState,
  action: ParkingAction,
): ParkingState {
  switch (action.type) {
    case 'PARKING_SET_NODE':
      return {
        ...state,
        node: action.payload.node,
      };

    case 'PARKING_INFO_REQUEST':
      return {
        ...initialState,
        node: state.node,
      };

    case 'PARKING_INFO_SUCCESS':
      return {
        ...action.payload,
        node: state.node,
      };
    case 'PARKING_INFO_FAIlURE':
      return {
        ...initialState,
      };
  }

  return state;
}
