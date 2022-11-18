import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CategoriesScreen from './Categories';
import FavoritesScreen from './Favorites';

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
}

const Drawer = createDrawerNavigator<DrawerParamList>();

function RecipesDrawer(): JSX.Element {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#351401',
    },
    headerTintColor: 'white',
    sceneContainerStyle: {
      backgroundColor: '#3f2f25',
    },
    drawerContentStyle: {
      backgroundColor: '#351401',
    },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1',
  }}>
    <Drawer.Screen
      name="Categories"
      options={{
        title: 'All Categories',
      }}
      component={CategoriesScreen} />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen} />
  </Drawer.Navigator>;
}

export default RecipesDrawer;
