import React, { useReducer, createContext, useContext } from 'react';

import Meal from '../../model/Meal';
import { favoritesReducer, type FavoritesActionType } from './Reducers';

const FavoritesContext = createContext<Meal[]>([]);
const FavoritesDispatchContext =
  createContext<React.Dispatch<FavoritesActionType>>(_ => { });

type FavoritesProviderProps = {
  children: JSX.Element
}

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps): JSX.Element {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    []
  );

  return <FavoritesContext.Provider value={favorites}>
    <FavoritesDispatchContext.Provider value={dispatch}>
      {children}
    </FavoritesDispatchContext.Provider>
  </FavoritesContext.Provider>;
}

export function useFavorites(): Meal[] {
  return useContext(FavoritesContext);
}

export function useFavoritesDispatch(): React.Dispatch<FavoritesActionType> {
  return useContext(FavoritesDispatchContext);
}
