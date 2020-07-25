/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */
import {RootState} from '../index';

export const TRANSACTION_PREFIX = 'TRANSACTIONS@@';
export const endpoint = '/api/transactions/';
export const transactionsSelector = (state: RootState) =>
  state.transactions.List;
