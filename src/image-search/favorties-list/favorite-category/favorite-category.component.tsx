import React from 'react';
import { ImageCard } from '../../../_shared/components/image-card/image-card.component';
import { GiphyImage } from '../../../_shared/types/image.type';
import { DeleteOutlined } from '@ant-design/icons';
import { favoriteCategoryStyles } from './favorite-category.styles';

export interface FavoriteCategoryProps {
  images: GiphyImage[];
  category: string;
}

export const FavoriteCategory: React.FC<FavoriteCategoryProps> = ({
  category,
  images,
}) => {
  const onDeleteClick = () => {};
  const renderImages = () => {
    return images.map((image) => (
      <div className={favoriteCategoryStyles}>
        <ImageCard url={image.url} alt={image.description} />
        <button>
          <DeleteOutlined />
        </button>
      </div>
    ));
  };
  return (
    <section>
      <h3>{category}</h3>
      {renderImages()}
    </section>
  );
};
