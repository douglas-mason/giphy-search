import { Button, Input } from 'antd';
import React, { SyntheticEvent, useState } from 'react';
import { searchGiphy } from '../../_shared/services/giphy-api.service';
import { GiphyImage } from '../../_shared/types/image.type';
import { searchFormStyles } from './search-form.styles';

export interface SearchFormProps {
  onSubmit: (imageResults: GiphyImage[], query: string) => void;
  onReset: () => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  onReset,
}) => {
  const [query, setQuery] = useState('');
  const [showReset, setShowReset] = useState(false);
  const handleOnSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setShowReset(true);
    const items = await searchGiphy(query);
    onSubmit(items, query);
  };

  const handleOnResetClick = () => {
    setQuery('');
    setShowReset(false);
    onReset();
  };

  return (
    <form onSubmit={handleOnSubmit} className={searchFormStyles}>
      <Input
        placeholder="Search for a gif"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Button htmlType="submit" type="primary">
        Search
      </Button>
      {showReset && <Button onClick={handleOnResetClick}>Reset</Button>}
    </form>
  );
};
