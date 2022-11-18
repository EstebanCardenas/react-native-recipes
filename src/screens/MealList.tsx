import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList } from '../App';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/DummyData';

type MealListScreenProps = NativeStackScreenProps<RootStackParamList, 'Meals'>;

function MealListScreen({
  navigation,
  route,
}: MealListScreenProps): JSX.Element {
  const { categoryId } = route.params;
  const category =
    useMemo(
      () => CATEGORIES.find(c => c.id === categoryId),
      [categoryId]
    );
  const meals =
    useMemo(
      () => MEALS.filter((e) => e.categoryIds.includes(categoryId)),
      [categoryId]
    );

  useEffect(() => {
    navigation.setOptions({
      title: category?.title ?? 'Meals',
    });
  }, [category, navigation]);

  return <SafeAreaView style={styles.container}>
    <MealsList
      mealList={meals}
      onMealPressed={mealId => {
        navigation.navigate(
          'Detail', {
          mealId: mealId,
        });
      }}
    />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default MealListScreen;
