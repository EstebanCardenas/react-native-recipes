import React from 'react';
import { FlatList, StyleSheet, ListRenderItemInfo, View, SafeAreaView } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data/DummyData';
import Category from '../model/Category';
import { type DrawerParamList } from './Drawer';
import { RootStackParamList } from '../App';

type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Categories'>,
  NativeStackScreenProps<RootStackParamList>
>;

function CategoriesScreen({
  navigation,
}: CategoriesScreenProps): JSX.Element {
  return <SafeAreaView style={styles.mainContainer}>
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={CATEGORIES}
      renderItem={(e: ListRenderItemInfo<Category>) => {
        return <CategoryCard
          category={e.item.title}
          color={e.item.color}
          onPress={() => {
            navigation.navigate('Meals', {
              categoryId: e.item.id,
            });
          }}
        />;
      }}
      keyExtractor={(item: Category) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.footer} />}
    />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    margin: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  separator: {
    height: 16,
  },
  footer: {
    height: 32,
  },
});

export default CategoriesScreen;
