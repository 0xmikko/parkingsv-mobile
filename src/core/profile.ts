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
  amount: number;

  state: 'SPLASH' | 'NAME_NEEDED' | 'WALLET_NEEDED' | 'READY';
}

export interface PlateAndNameDTO {
  name: string;
  plate: string;
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
