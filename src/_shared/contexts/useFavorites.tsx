import React, { useState } from 'react';

import { createContext, useContext } from 'react';
import { GiphyImage } from '../types/image.type';

type Favorites = Map<string, GiphyImage[]>;
interface FavoritesState {
  favorites: Favorites;
  add: (image: GiphyImage, category: string) => void;
  remove: (image: GiphyImage, category: string) => void;
  clear: () => void;
}

const defaultContext: FavoritesState = {
  favorites: new Map<string, GiphyImage[]>(),
  add: () => {},
  remove: () => {},
  clear: () => {},
};

const FavoritesContext = createContext<FavoritesState>(defaultContext);

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorites>(new Map());
  const addToFavorites = (image: GiphyImage, category: string) => {
    const images = favorites.get(category);
    if (images) {
      images.push(image);
      favorites.set(category, images);
    } else {
      favorites.set(category, [image]);
    }
    setFavorites(new Map(favorites));
  };
  const removeFromFavorites = (image: GiphyImage, category: string) => {
    const images = favorites.get(category);
    if (!images) return;
    const indexToRemove = images.findIndex((i) => i.url === image.url);
    if (indexToRemove > -1) {
      images.splice(indexToRemove, 1);
      if (!images.length) {
        favorites.delete(category);
      } else {
        favorites.set(category, images);
      }
    }
    setFavorites(new Map(favorites));
  };
  const clearFavorites = () => {
    setFavorites(new Map());
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        add: addToFavorites,
        remove: removeFromFavorites,
        clear: clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
