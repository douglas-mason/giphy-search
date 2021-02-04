import React from 'react';
import { ImageCard } from '../../_shared/components/image-card/image-card.component';
import { useFavorites } from '../../_shared/contexts/useFavorites';
import { GiphyImage } from '../../_shared/types/image.type';

export interface ImageListProps {
  images: GiphyImage[];
  category: string;
}

export const ImageList: React.FC<ImageListProps> = ({ images, category }) => {
  const { add } = useFavorites();
  const handleOnFavoriteClick = (image: GiphyImage) => {
    add(image, category);
  };
  const renderImages = () => {
    return images.map((image) => (
      <ImageCard
        url={image.url}
        alt={image.description}
        onFavoriteClick={() => handleOnFavoriteClick(image)}
      />
    ));
  };

  return <section>{renderImages()}</section>;
};
