/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import {commonStyles} from '../../../styles';
import {KeyUtil} from 'parkingsv-contract/lib/keyUtil';
import {profileSelector} from '../../store/profile';

export const NewMnemonicScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [mnemonic, setMnemonic] = useState(KeyUtil.generateMnemonic);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {state} = useSelector(profileSelector);

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

  const onSubmit = () => {
    setIsSubmitted(true);

    // Emit data
    dispatch(actions.profile.storeMnemonic(mnemonic));
  };

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#687882',
          marginTop: 55,
          marginBottom: 15,
        }}>
        New mnemonic
      </Text>
      <View
        style={{
          width: '80%',
          marginTop: 30,
          marginBottom: 30,
        }}>
        <Text h2 style={{textAlign: "center"}}>{mnemonic}</Text>
      </View>
      <Button
        title={'I copy mnemonic to safe place'}
        onPress={onSubmit}
        disabled={isSubmitted}
        // type="outline"
      />
    </SafeAreaView>
  );
};
