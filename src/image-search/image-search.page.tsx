import React, { useState } from 'react';
import { GiphyImage } from '../_shared/types/image.type';
import { FavoritesList } from './favorties-list/favorites-list.component';
import { ImageList } from './image-list/image-list.component';
import {
  favoriteListContainerStyles,
  imageListContainerStyles,
  imageSearchPageStyles,
} from './image-search.styles';
import { SearchForm } from './search-form/search-form.component';

export const ImageSearchPage = () => {
  const [searchResults, setSearchResults] = useState<GiphyImage[]>([]);
  const [query, setQuery] = useState('');
  const handleOnSubmit = (results: GiphyImage[], query: string) => {
    setSearchResults(results);
    setQuery(query);
  };

  const handleOnReset = () => {
    setSearchResults([]);
    setQuery('');
  };

  return (
    <section>
      <SearchForm onSubmit={handleOnSubmit} onReset={handleOnReset} />
      <section className={imageSearchPageStyles}>
        <div className={imageListContainerStyles}>
          <ImageList images={searchResults} category={query} />
        </div>
        <div className={favoriteListContainerStyles}>
          <FavoritesList />
        </div>
      </section>
    </section>
  );
};
