import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
      <iframe
        className="w-screen h-screen scale-125"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="autoplay; fullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
