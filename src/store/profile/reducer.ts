/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {Profile} from '../../core/profile';
import {ProfileActions} from './';

export interface ProfileState extends Profile {}

const initialState: ProfileState = {
  id: 'Loading',
  name: 'Loading',
  plate: 'Loading',
  avatar: 'Loading',
  pubkey: '',
  privateKey: '',
  isParking: false,
  amount: 0,
  startedAt: 0,
};


export default function createReducer(
  state: ProfileState = initialState,
  action: ProfileActions,
): ProfileState {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return state;
    case 'PROFILE_SUCCESS':
      return action?.payload ? action.payload : state;
    case 'PROFILE_FAILURE':
      return {
        ...state,
      };
  }

  return state;
}
