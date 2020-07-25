/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

export interface Profile {
  id: string;
  name: string;
  plate: string;
  avatar: string;
  pubkey: string;
  privateKey: string;
  isParking: boolean;
  amount: number;
  startedAt: number;
}

export interface ProfileChangeNameDTO {
  name: string;
}
