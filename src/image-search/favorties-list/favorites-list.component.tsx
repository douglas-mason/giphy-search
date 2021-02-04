import { Button } from 'antd';
import React, { ReactElement, useEffect, useState } from 'react';
import { useFavorites } from '../../_shared/contexts/useFavorites';
import { FavoriteCategory } from './favorite-category/favorite-category.component';
import { favoritesListStyles } from './favorites.list.styles';

interface FavoritesListProps {}

export const FavoritesList: React.FC<FavoritesListProps> = () => {
  const { favorites, clear } = useFavorites();

  const [renderItems, setRenderItems] = useState<ReactElement[]>([]);

  useEffect(() => {
    const elements: ReactElement[] = Array.from(
      favorites
    ).map(([category, image]) => (
      <FavoriteCategory category={category} images={image} />
    ));
    setRenderItems(elements);
  }, [favorites]);

  return (
    <section className={favoritesListStyles}>
      <h2>Favorites</h2>
      {!!renderItems.length && (
        <div>
          <Button type="link" onClick={clear}>
            Clear All Favorites
          </Button>
        </div>
      )}
      {renderItems}
    </section>
  );
};
