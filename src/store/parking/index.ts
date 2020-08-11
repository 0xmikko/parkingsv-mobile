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
      payload: {node: string; code: string};
    }
  | {
      type: 'PARKING_INFO_SUCCESS';
      payload: Parking;
    }
  | {
      type: 'PARKING_INFO_REQUEST' | 'PARKING_INFO_FAIlURE';
      error?: boolean;
    }
  | {
      type: 'PARKING_START_SUCCESS';
      payload: {timestamp: number};
    }
  | {
      type: 'PARKING_PAY_SUCCESS';
    };
