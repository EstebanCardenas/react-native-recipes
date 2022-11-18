import Meal from '../../model/Meal';

export type FavoritesActionType =
  | { type: 'add', meal: Meal }
  | { type: 'remove', mealId: string }

export function favoritesReducer(favorites: Meal[], action: FavoritesActionType): Meal[] {
  switch (action.type) {
    case 'add':
      const meal: Meal = action.meal;
      if (favorites.find(m => m.id === meal.id) != null) {
        return favorites;
      }
      return [...favorites, action.meal];
    case 'remove':
      return favorites.filter(m => m.id !== action.mealId);
  }
}
