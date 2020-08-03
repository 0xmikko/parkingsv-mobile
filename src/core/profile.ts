/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

export interface Profile {
  // id: string;
  name: string;
  plate: string;
  publicKey: string;
  privateKey: string;
  isParking: boolean;
  amount: number;
  startedAt?: number;
  state: 'SPLASH' | 'NAME_NEEDED' | 'WALLET_NEEDED' | 'READY';
}

export interface ProfileChangeNameDTO {
  name: string;
}

export const updateState = (profile: Profile): Profile => {
  if (profile.name === '' || profile.plate === '') {
    profile.state = 'NAME_NEEDED';
  } else if (profile.privateKey === '') {
    profile.state = 'WALLET_NEEDED';
  } else {
    profile.state = 'READY';
  }
  return profile;
};
