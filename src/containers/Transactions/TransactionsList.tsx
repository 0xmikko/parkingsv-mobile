/*
 * ParkingSV - Interplanetary Parking System
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import SearchBar from 'react-native-search-bar';
import {useSelector} from 'react-redux';
import {Transaction} from '../../core/transaction';
import {TransactionCard} from './TransactionCard';
import {profileSelector} from '../../store/profile';
import {DataScreenComponentProps} from 'rn-mobile-components';

export const TransactionsList: React.FC<DataScreenComponentProps<
  Transaction[]
>> = ({data, onSelect}) => {
  const [search, setSearch] = useState('');
  const profile = useSelector(profileSelector);

  const otherContactsData = data.filter((elm) => elm.id !== profile.id);
  const filteredData =
    search === ''
      ? otherContactsData
      : otherContactsData.filter((elm) => elm.parkingName.search(search) !== -1);

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        text={search}
        searchBarStyle={'minimal'}
      />

      <FlatList
        style={{...styles.container, marginTop: 25}}
        data={filteredData}
        renderItem={(elem) => (
          <TransactionCard
            key={elem.item.id}
            data={elem.item}
            selectContact={onSelect!}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 0,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
