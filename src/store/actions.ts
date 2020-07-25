/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import * as auth from './auth/actions';
import * as transactions from './transactions/actions';
import * as profile from './profile/actions';
import * as operations from 'redux-data-connect/lib/operations/actions';


export default {
  auth,
  transactions,
  profile,
  operations,
};

