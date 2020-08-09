/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ParkingToken} from 'parkingsv-contract';

export type ContractActions = {
  type: 'INIT_CONTRACT';
  payload: {contract: ParkingToken};
};
