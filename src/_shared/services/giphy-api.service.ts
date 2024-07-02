import { GiphyImage } from '../types/image.type';

const API_KEY = '9naL7updQErN3o5CSy9lrnSrrrA5SRqr';
const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';

type RequestDataItem = {
  data: {
    title: string;
    images: { fixed_width: { url: string } };
  }[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
};

export const searchGiphy = async (query: string, limit = 12, offset = 0) => {
  const params = new URLSearchParams();
  params.set('api_key', API_KEY);
  params.set('q', query);
  params.set('limit', limit.toString());
  params.set('offset', offset.toString());
  const results: RequestDataItem = await fetch(
    `${SEARCH_URL}?${params.toString()}`,
    {}
  ).then((resp) => resp.json());

  const items = results.data.map<GiphyImage>((item) => ({
    url: item.images.fixed_width.url,
    description: item.title,
  }));
  return items;
};

export let searchByCategory = async (cat: string | null) => {
  // set query string parameter for category
  const items = fetch(`${SEARCH_URL}?=${encodeURIComponent(cat)}`).then((r) =>
    r.json()
  );
  return items;
};
