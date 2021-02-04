const API_KEY = "9naL7updQErN3o5CSy9lrnSrrrA5SRqr"
const SEARCH_URL = "https://api.giphy.com/v1/gifs/search";
export const searchGiphy = (query: string, limit = 12, offset = 0) => {
  const params = new URLSearchParams();
  params.set("api_key", API_KEY);
  params.set("q", query);
  params.set("limit", limit.toString())
  params.set("offset", offset.toString())
  return fetch(`${SEARCH_URL}?${params.toString()}`, {
    
  }).then(result => result.json()).then(res => res.data)
}