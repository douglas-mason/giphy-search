import React from 'react';
import { ImageCard } from '../../../_shared/components/image-card/image-card.component';
import { GiphyImage } from '../../../_shared/types/image.type';
import { DeleteOutlined } from '@ant-design/icons';
import {
  favoriteCategoryStyles,
  imageContainerStyles,
} from './favorite-category.styles';
import { useFavorites } from '../../../_shared/contexts/useFavorites';

export interface FavoriteCategoryProps {
  images: GiphyImage[];
  category: string;
}

export const FavoriteCategory: React.FC<FavoriteCategoryProps> = ({
  category,
  images,
}) => {
  const { remove } = useFavorites();
  const onDeleteClick = (image: GiphyImage) => {
    remove(image, category);
  };
  const renderImages = () => {
    return images.map((image) => (
      <div className={favoriteCategoryStyles}>
        <ImageCard url={image.url} alt={image.description} />
        <button onClick={() => onDeleteClick(image)}>
          <DeleteOutlined />
        </button>
      </div>
    ));
  };
  return (
    <section>
      <h3>{category}</h3>
      <div className={imageContainerStyles}>{renderImages()}</div>
    </section>
  );
};
