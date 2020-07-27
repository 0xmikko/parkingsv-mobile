/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {RootState} from '../index';
import {Parking} from '../../core/parking';
export const namespace = 'parking';

export const parkingSelector = (state: RootState) => state.parking;

export type ParkingAction =
  | {
      type: 'PARKING_SET_NODE';
      payload: {node: string};
    }
  | {
      type: 'PARKING_SUCCESS';
      payload: Parking;
    }
  | {
      type: 'PARKING_REQUEST' | 'PARKING_FAILURE';
      error?: boolean;
    };
