/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect, useState} from 'react';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {TransactionsList} from '../../containers/Transactions/TransactionsList';

import {operationSelector} from 'redux-data-connect';
import {DataScreen} from 'rn-mobile-components';
import {transactionsSelector} from '../../store/transactions';

export function TransactionsListScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const [hash, setHash] = useState('0');

  const transactionsList = useSelector(transactionsSelector).data;
  const operation = useSelector(operationSelector(hash));

  const getTransactionsList = () => {
    const newHash = Date.now().toString();
    dispatch(actions.transactions.getList(newHash));
    setHash(newHash);
  };

  useEffect(() => {
    getTransactionsList();
  }, []);

  return (
    <DataScreen
      data={transactionsList || []}
      status={
        hash === '0' ? 'STATUS.LOADING' : operation?.status || 'STATUS.LOADING'
      }
      component={TransactionsList}
      onSelect={() => console.log('ON SELECT')}
      onRefresh={() => getTransactionsList()}
    />
  );
}
