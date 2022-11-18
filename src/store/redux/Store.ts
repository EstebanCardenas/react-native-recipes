import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './FavoritesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  middleware: (middleware) => middleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
