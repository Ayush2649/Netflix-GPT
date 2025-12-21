import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  const { original_title, overview, id, backdrop_path } = mainMovie;

  return (
    // 👇 overflow-hidden is CRITICAL
    <div className="relative h-screen w-screen overflow-hidden">
      <VideoBackground movieId={id} backdropPath={backdrop_path} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
  
