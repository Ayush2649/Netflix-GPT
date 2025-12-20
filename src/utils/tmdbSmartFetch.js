import { API_OPTIONS } from "./constants";

export const fetchSmartMovies = async (filters) => {
  let url = "https://api.themoviedb.org/3/discover/movie?";

  if (filters.with_genres.length) {
    url += `with_genres=${filters.with_genres.join(",")}&`;
  }

  if (filters.region) {
    url += `region=${filters.region}&`;
  }

  if (filters.language) {
    url += `with_original_language=${filters.language}&`;
  }

  if (filters.year_lte) {
    url += `primary_release_date.lte=${filters.year_lte}-12-31&`;
  }

  url += "sort_by=popularity.desc";

  const res = await fetch(url, API_OPTIONS);
  const data = await res.json();

  return data.results;
};
