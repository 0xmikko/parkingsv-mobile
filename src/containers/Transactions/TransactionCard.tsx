/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Transaction} from '../../core/transaction';
import {SmartAvatar} from 'rn-mobile-components';

interface TransactionCardProps {
  data: Transaction;
  selectContact: (id: string) => void;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
  data,
  selectContact,
}) => {
  const title = data.parkingName;

  return (
    <TouchableOpacity
      onPress={() => selectContact(data.id.toString())}
      style={{marginTop: -1}}>
      <View style={styles.container}>
        <View>
          <View style={{paddingTop: 3}}>
            <SmartAvatar name={data.parkingName} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text h4>{title}</Text>
            <Text>{data.id}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 5,
    marginTop: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 20,
    flex: 1,
    alignContent: 'flex-start',
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default TransactionCard;
