/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {WelcomeStack} from './Welcome/WelcomeStack';

import actions from '../store/actions';
import {Router} from './Router';
import {profileSelector} from '../store/profile';

export const AuthSwitcher: React.FC = () => {
  const {state} = useSelector(profileSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.profile.getProfile());
  }, []);

  switch (state) {
    default:
    case 'SPLASH':
    case 'NAME_NEEDED':
    case 'WALLET_NEEDED':
      return <WelcomeStack />;
    case 'READY':
      return <Router />;
  }
};
