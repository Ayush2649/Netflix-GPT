import { useSelector } from "react-redux";
import { useRef } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainMovieRef = useRef(null);

  if (!movies) return null;

  // ✅ pick ONCE
  if (!mainMovieRef.current) {
    mainMovieRef.current =
      movies[Math.floor(Math.random() * movies.length)];
  }

  const { original_title, overview, id } = mainMovieRef.current;

  return (
    <div className="relative w-screen h-[60vh] md:h-screen overflow-hidden">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
