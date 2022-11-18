import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Meal from '../../model/Meal';
import MealItem from './MealItem';

type MealsListProps = {
  mealList: Meal[];
  onMealPressed: (id: string) => void;
  onMealLongPressed?: (id: string) => void;
}

function MealsList({
  mealList,
  onMealPressed,
  onMealLongPressed,
}: MealsListProps): JSX.Element {
  return <FlatList
    data={mealList}
    renderItem={data => <MealItem
      onPressed={() => {
        onMealPressed(data.item.id);
      }}
      onLongPressed={() => onMealLongPressed?.call(null, data.item.id)}
      meal={data.item} />
    }
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    contentContainerStyle={styles.list}
  />;
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  separator: {
    height: 16,
  },
});

export default MealsList;
