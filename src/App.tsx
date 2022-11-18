import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';

import RecipesDrawer from './screens/Drawer';
import MealDetailScreen from './screens/MealDetail';
import MealListScreen from './screens/MealList';
import store from './store/redux/Store';

export type RootStackParamList = {
  Drawer: undefined;
  Meals: { categoryId: string };
  Detail: { mealId: string };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    // <FavoritesProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
          initialRouteName="Drawer">
          <Stack.Screen
            name="Drawer"
            component={RecipesDrawer}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen
            name="Meals"
            component={MealListScreen} />
          <Stack.Screen
            name="Detail"
            component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </FavoritesProvider>
  );
}

export default App;
