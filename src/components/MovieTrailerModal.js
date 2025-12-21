import { useSelector, useDispatch } from "react-redux";
import { clearSelectedMovie } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieTrailerModal = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.selectedMovie);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!movie) return;

    const fetchTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
        API_OPTIONS
      );
      const data = await res.json();

      const trailer = data.results?.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );

      setTrailerKey(trailer?.key);
    };

    fetchTrailer();
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <div className="bg-black w-[70%] relative">

        {/* Close */}
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={() => dispatch(clearSelectedMovie())}
        >
          ✕
        </button>

        {/* Trailer */}
        {trailerKey && (
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
            title="Trailer"
            allow="autoplay; encrypted-media"
          />
        )}

        {/* Info */}
        <div className="p-4 text-white">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p className="text-sm text-gray-300 mt-2">
            {movie.overview}
          </p>
          <p className="mt-2 text-sm">
            ⭐ {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieTrailerModal;
