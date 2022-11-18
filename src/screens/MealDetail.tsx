import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../App';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/DummyData';
import { useAppDispatch } from '../store/redux/Hooks';
import { add } from '../store/redux/FavoritesSlice';

type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

function MealDetailScreen({
  navigation,
  route,
}: MealDetailScreenProps): JSX.Element {
  const { mealId } = route.params;
  const meal =
    useMemo(
      () => MEALS.find(m => m.id === mealId),
      [mealId]
    );
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({
      title: meal?.title ?? 'Meal',
      headerRight: () => <IconButton
        onPressed={() => {
          dispatch(add(meal!));
        }}
      />,
    });
  }, [meal, navigation, dispatch]);

  return <ScrollView style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: meal?.imageUrl,
      }}
    />
    <Text style={styles.title}>{meal?.title}</Text>
    <MealDetails
      affordability={meal?.affordability ?? ''}
      complexity={meal?.complexity ?? ''}
      duration={meal?.duration ?? 0}
      style={styles.details}
    />
    <View style={styles.listContainer}>
      <Text style={styles.subtitle}>Ingredients</Text>
      <List list={meal?.ingredients ?? []} />
      <Text style={styles.subtitle}>Steps</Text>
      <List list={meal?.steps ?? []} />
    </View>
    <View style={styles.footer} />
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
    textAlign: 'center',
    color: 'white',
  },
  details: {
    color: 'silver',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  listContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  footer: {
    height: 16,
  },
});

export default MealDetailScreen;
