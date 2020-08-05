/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import {NameAndPlateFormView} from '../../containers/Profile/NameAndPlateFormView';
import {commonStyles} from '../../../styles';
import {profileSelector} from '../../store/profile';
import {useNavigation} from '@react-navigation/native';
import {PlateAndNameDTO} from '../../core/profile';

export const EditNameAndPlateScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const data = useSelector(profileSelector);
  const {state} = data;

  // TODO: Move status to new Dataloader component

  useEffect(() => {
    switch (state) {
      default:
      case 'SPLASH':
      case 'NAME_NEEDED':
        navigation.navigate('EditNameAndPlateScreen');
        return;
      case 'WALLET_NEEDED':
        navigation.navigate('NewMnemonicScreen');
        return;
    }
  }, [state]);

  const onSubmit = (values: PlateAndNameDTO) => {
    setIsSubmitted(true);

    // Emit data
    dispatch(actions.profile.storeNameAndPlate(values.name, values.plate));
  };

  return (
    <>
      <SafeAreaView style={commonStyles.safeAreaContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#687882',
            marginTop: 55,
            marginBottom: 15,
          }}>
          Enter your data
        </Text>
        <NameAndPlateFormView
          data={data}
          onSubmit={onSubmit}
          isSubmitted={isSubmitted}
        />
      </SafeAreaView>
    </>
  );
};
