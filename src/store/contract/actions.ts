/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {KeyUtil} from 'parkingsv-contract/lib/keyUtil';
import {RootState} from '../index';
import {ContractActions} from './index';
import {ParkingToken} from 'parkingsv-contract';
import {FUNDING_TRANSACTION} from '../../../config';
import desc from 'parkingsv-contract/build/token_desc.json';

let contractInstance: ParkingToken | undefined = undefined;
let isLoading = false;

export function getContractInstance(): ParkingToken | undefined {
  return contractInstance;
}

export const initContract = (
  privateKey: string,
): ThunkAction<void, RootState, unknown, ContractActions> => async (
  dispatch,
) => {
  if (contractInstance === undefined && !isLoading) {
    isLoading = true;
    const privKey = KeyUtil.getPrivateKeyFromWIF(privateKey);
    contractInstance = await ParkingToken.fromTransaction(
      privKey,
      FUNDING_TRANSACTION,
      desc,
    );

    dispatch({type: 'INIT_CONTRACT', payload: {contract: contractInstance}});

    console.log(contractInstance.ledger.toString());
    isLoading = false;
  }
};
