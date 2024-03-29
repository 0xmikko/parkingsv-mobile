/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {RootState} from '../index';
import {Profile} from '../../core/profile';
export const namespace = 'profile';

export const profileSelector = (state: RootState) => state.profile;

export type ProfileAction =
  | {
      type: 'PROFILE_NOT_FOUND';
    }
  | {
      type: 'PROFILE_REQUEST' | 'PROFILE_SUCCESS' | 'PROFILE_FAILURE';
      payload?: Profile;
      error?: boolean;
    };
