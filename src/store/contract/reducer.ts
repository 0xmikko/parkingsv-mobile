/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ContractActions} from './';
import {ParkingToken} from 'parkingsv-contract';

export interface ContractState {
  contract: ParkingToken | undefined;
}

const initialState: ContractState = {
  contract: undefined,
};

export default function createReducer(
  state: ContractState = initialState,
  action: ContractActions,
): ContractState {
  switch (action.type) {
    case 'INIT_CONTRACT':
      return {...action.payload};
  }

  return state;
}
