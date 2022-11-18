import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Meal from '../../model/Meal';
import { RootState } from './Store';

interface FavoritesState {
  value: Meal[];
}

const initialState: FavoritesState = {
  value: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Meal>) => {
      const addedMeal: Meal = action.payload;
      if (state.value.find(m => m.id === addedMeal.id) != null) {
        return;
      }
      state.value.push(addedMeal);
    },
    remove: (state, action: PayloadAction<string>) => {
      const removedMealId: string = action.payload;
      let idx = -1;
      for (let i = 0; i < state.value.length; i++) {
        const meal = state.value[i];
        if (meal.id === removedMealId) {
          idx = i;
          break;
        }
      }
      if (idx !== -1) {
        state.value.splice(idx, 1);
      }
    },
  },
});

export const { add, remove } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.value;
export default favoritesSlice.reducer;
