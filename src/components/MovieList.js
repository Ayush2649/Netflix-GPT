import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../utils/movieSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 md:px-8 pb-4">
      <h1 className="text-base md:text-3xl py-3 text-red-700 font-bold">
        {title}
      </h1>

      <div
        className="
      pl-4 -ml-4 md:-ml-10 md:pl-10
      flex gap-4
      overflow-x-scroll scrollbar-hide
    "
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            onClick={() => dispatch(setSelectedMovie(movie))}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
