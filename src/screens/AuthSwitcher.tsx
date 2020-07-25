/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {WelcomeStack} from './Welcome/WelcomeStack';

import actions, {actionsAfterAuth} from '../store/actions';
import {Router} from './Router';
import {authSelector, isAuthenticatedSelector} from 'redux-data-connect';
import {LoadingView} from 'rn-mobile-components';

export const AuthSwitcher: React.FC = () => {
  const {status} = useSelector(authSelector);
  const isUserAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.auth.getTokenAtStartup());
  }, []);

  useEffect(() => {
    switch (status) {
      case 'AUTH_STARTUP':
        dispatch(actions.auth.getTokenAtStartup());
        break;
      case 'AUTH_SUCCESS':
        dispatch(actionsAfterAuth());
        break;
    }
  }, [status]);

  switch (status) {
    default:
    case 'AUTH_STARTUP':
      return <LoadingView />;
    case 'AUTH_REQUIRED':
    case 'AUTH_SUCCESS':
      // if (!isUserAuthenticated) {
      //   return <WelcomeStack />;
      // }

      return <Router />;
  }
};
