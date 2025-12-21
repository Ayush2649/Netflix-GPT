import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../utils/movieSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 pb-3">
      <h1 className="text-lg py-4 text-red-700 font-bold text-xl">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
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
