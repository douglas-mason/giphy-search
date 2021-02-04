import './App.css';
import React from 'react';
import { ImageSearchPage } from './image-search/image-search.page';
import { FavoritesProvider } from './_shared/contexts/useFavorites';

function App() {
  return (
    <div className="App">
      <h1>GIPHY SEARCH</h1>
      <FavoritesProvider>
        <ImageSearchPage />
      </FavoritesProvider>
    </div>
  );
}

export default App;
