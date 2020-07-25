/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

export interface Transaction {
  id: string;
  parkingName: string;
  createdAt: string;
  parkingPubKey: string;
  amount: number;
}
