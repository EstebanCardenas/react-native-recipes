import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type MealDetailsProps = {
  duration: number;
  complexity: string;
  affordability: string;
  style?: object;
}

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
}: MealDetailsProps): JSX.Element {
  return <View style={styles.details}>
    <Text style={[styles.detailItem, style]}>{duration}m</Text>
    <Text style={[styles.detailItem, style]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItem, style]}>{affordability.toUpperCase()}</Text>
  </View>;
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
