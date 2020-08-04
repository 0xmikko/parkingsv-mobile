/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyUtil} from 'parkingsv-contract/lib/keyUtil';
import {RootState} from '../index';
import {ProfileAction} from './index';
import {Profile, updateState} from '../../core/profile';

// Store user name & licence plate
export const storeNameAndPlate = (
  name: string,
  plate: string,
): ThunkAction<void, RootState, unknown, ProfileAction> => async (
  dispatch,
  getState,
) => {
  const state = getState();
  let profile = {...state.profile, name, plate};

  profile = updateState(profile);

  dispatch({type: 'PROFILE_SUCCESS', payload: profile});
};

// Store mnemonic
export const storeMnemonic = (
  mnemonic: string,
): ThunkAction<void, RootState, unknown, ProfileAction> => async (
  dispatch,
  getState,
) => {
  const state = getState();
  let profile = {...state.profile};
  profile.privateKey = KeyUtil.getPrivateKeyFromMnemonic(mnemonic);
  profile.publicKey = KeyUtil.getAddress(profile.privateKey);

  profile = updateState(profile);

  dispatch({type: 'PROFILE_SUCCESS', payload: profile});
};

export const getPayload = (): ThunkAction<
  void,
  RootState,
  unknown,
  ProfileAction
> => async (dispatch) => {
  const profileStr = await AsyncStorage.getItem('profile');
  if (profileStr === null) {
    dispatch({type: 'PROFILE_NOT_FOUND'});
    return;
  }

  let profile = JSON.parse(profileStr) as Profile;
  profile = updateState(profile);

  dispatch({type: 'PROFILE_SUCCESS', payload: profile});
};
