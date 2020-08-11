/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { ProfileDetails } from "../../containers/Settings/ProfileDetails";
import { profileSelector } from "../../store/profile";
import { DataScreen } from "rn-mobile-components";

export const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.profile.getProfile());
  }, []);

  const data = useSelector(profileSelector);

  return (
    <DataScreen
      data={data}
      component={ProfileDetails}
      status={'STATUS.SUCCESS'}
    />
  );
};
