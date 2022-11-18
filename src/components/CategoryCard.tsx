import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type CategoryCardProps = {
  category: string;
  color: string;
  onPress: () => void;
}

function CategoryCard({
  category,
  color,
  onPress,
}: CategoryCardProps): JSX.Element {
  return <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
    style={[styles.container, { backgroundColor: color }]}>
    <Text style={styles.text}>{category}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '46%',
    height: 160,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CategoryCard;
