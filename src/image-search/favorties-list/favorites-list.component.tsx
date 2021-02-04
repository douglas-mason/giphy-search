import React, { ReactElement, useEffect, useState } from 'react';
import { useFavorites } from '../../_shared/contexts/useFavorites';
import { FavoriteCategory } from './favorite-category/favorite-category.component';
import { favoritesListStyles } from './favorites.list.styles';

interface FavoritesListProps {}

export const FavoritesList: React.FC<FavoritesListProps> = () => {
  const { favorites } = useFavorites();

  const [renderItems, setRenderItems] = useState<ReactElement[]>([]);

  useEffect(() => {
    const elements: ReactElement[] = Array.from(
      favorites
    ).map(([category, image]) => (
      <FavoriteCategory category={category} images={image} />
    ));
    setRenderItems(elements);
  }, [favorites]);

  return <section className={favoritesListStyles}>{renderItems}</section>;
};
