/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {combineReducers} from 'redux';
import {authReducer, operationReducer} from 'redux-data-connect';
import transactions from './transactions/reducer';
import profile from './profile/reducer';

export default combineReducers({
  auth: authReducer,
  transactions,
  profile,
  operations: operationReducer,
});
