/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import * as contract from  './contract/actions';
import * as transactions from './transactions/actions';
import * as parking from './parking/actions';
import * as profile from './profile/actions';
import * as operations from 'redux-data-connect/lib/operations/actions';

export default {
  contract,
  transactions,
  parking,
  profile,
  operations,
};
