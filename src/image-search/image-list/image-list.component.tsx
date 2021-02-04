import React from 'react';
import { ImageCard } from '../../_shared/components/image-card/image-card.component';
import { useFavorites } from '../../_shared/contexts/useFavorites';
import { GiphyImage } from '../../_shared/types/image.type';
import { imageListStyles } from './image-list.styles';

export interface ImageListProps {
  images: GiphyImage[];
  category: string;
}

export const ImageList: React.FC<ImageListProps> = ({ images, category }) => {
  const { favorites, add } = useFavorites();
  const handleOnFavoriteClick = (image: GiphyImage) => {
    add(image, category);
  };
  const renderImages = () => {
    const itemsToHide = favorites.get(category) || [];
    return images
      .filter((image) => !itemsToHide.find((i) => i.url === image.url))
      .map((image) => (
        <ImageCard
          url={image.url}
          alt={image.description}
          onFavoriteClick={() => handleOnFavoriteClick(image)}
        />
      ));
  };

  return <section className={imageListStyles}>{renderImages()}</section>;
};
