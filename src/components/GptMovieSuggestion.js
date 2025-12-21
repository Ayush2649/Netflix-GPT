import MovieList from "./MovieList";

const GptMovieSuggestion = ({ movies }) => {
  return (
    <div className="mt-10 bg-black bg-opacity-70">
      <MovieList
        title="Results for your search"
        movies={movies}
      />
    </div>
  );
};

export default GptMovieSuggestion;
