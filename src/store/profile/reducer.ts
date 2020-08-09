/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {Profile} from '../../core/profile';
import {ProfileAction} from './';

export interface ProfileState extends Profile {}

const initialState: ProfileState = {
  name: '',
  plate: '',
  publicKey: '',
  privateKey: '',
  amount: 0,
  state: 'NAME_NEEDED',
};

export default function createReducer(
  state: ProfileState = initialState,
  action: ProfileAction,
): ProfileState {
  switch (action.type) {
    case 'PROFILE_NOT_FOUND':
      return initialState;
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
