import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Meal from '../../model/Meal';
import MealDetails from '../MealDetails';

type MealItemProps = {
  meal: Meal
  onPressed: () => void;
  onLongPressed?: () => void;
}

function MealItem({
  meal,
  onPressed,
  onLongPressed,
}: MealItemProps): JSX.Element {
  return <View style={styles.mealItem}>
    <TouchableOpacity onPress={onPressed} onLongPress={onLongPressed}>
      <Image
        source={{ uri: meal.imageUrl }}
        style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
      />
    </TouchableOpacity>
  </View>;
}

const styles = StyleSheet.create({
  mealItem: {
    borderRadius: 16,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default MealItem;
