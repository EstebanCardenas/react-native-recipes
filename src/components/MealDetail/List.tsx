import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ListProps = {
  list: string[]
}

function List({
  list,
}: ListProps): JSX.Element {
  return <>
    {list.map((i, idx) => <View key={idx} style={styles.listItem}>
      <Text style={styles.itemText}>{i}</Text>
    </View>)}
  </>;
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});

export default List;
