import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { type RootStackParamList } from '../App';
import { type DrawerParamList } from './Drawer';
import Meal from '../model/Meal';
import MealsList from '../components/MealsList/MealsList';
import { useAppDispatch, useAppSelector } from '../store/redux/Hooks';
import { remove, selectFavorites } from '../store/redux/FavoritesSlice';

type FavoritesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Favorites'>,
  NativeStackScreenProps<RootStackParamList>
>;

function FavoritesScreen({
  navigation,
}: FavoritesScreenProps): JSX.Element {
  const favorites: Meal[] = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  if (favorites.length === 0) {
    return <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>You have no favorite meals yet.</Text>
    </View>;
  }

  return <SafeAreaView style={styles.container}>
    <MealsList
      mealList={favorites}
      onMealPressed={(mealId) => navigation.navigate(
        'Detail', {
          mealId: mealId,
        },
      )}
      onMealLongPressed={(mealId) => dispatch(remove(mealId))}
    />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoritesScreen;
