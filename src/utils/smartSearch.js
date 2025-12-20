export const parseQuery = (query) => {
  const q = query.toLowerCase();

  const filters = {
    with_genres: [],
    region: "",
    language: "",
    year_lte: "",
  };

  if (q.includes("funny") || q.includes("comedy")) {
    filters.with_genres.push(35); // Comedy
  }

  if (q.includes("indian") || q.includes("bollywood")) {
    filters.region = "IN";
    filters.language = "hi";
  }

  if (q.includes("retro") || q.includes("old")) {
    filters.year_lte = 2005;
  }

  return filters;
};
