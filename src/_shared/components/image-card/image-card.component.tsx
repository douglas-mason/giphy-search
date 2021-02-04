import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import {
  favoriteIconStyles,
  imageCardStyles,
  imageStyles,
} from './image-card.styles';

export interface ImageCardProps {
  url: string;
  alt: string;
  onFavoriteClick?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  url,
  alt,
  onFavoriteClick,
}) => {
  return (
    <figure className={imageCardStyles}>
      {onFavoriteClick && (
        <button className={favoriteIconStyles} onClick={onFavoriteClick}>
          <StarOutlined />
        </button>
      )}
      <img src={url} alt={alt} className={imageStyles} />
    </figure>
  );
};
