import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-4">
      <h2 className="text-3xl font-bold text-[#e50914] mb-3">
        {title}
      </h2>

      <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
