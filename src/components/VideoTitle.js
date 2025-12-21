import React from "react";
import MovieDescription from "./MovieDescription";

const VideoTitle = ({ title, overview, }) => {
  return (
    <div className="pt-[15%] px-[5%] absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <MovieDescription overview={overview} />
      <div className="flex gap-4 mt-6">
        {/* Play Button */}
        <button
              className="
          flex items-center gap-2
          bg-white text-black
          px-8 py-2
          text-lg font-semibold
          rounded
          hover:bg-white/80
          transition
        "
        >
          ▶︎ Play
        </button>

        {/* More Info Button */}
        <button
          className="
            flex items-center gap-2
            bg-gray-500/70 text-white
            px-10 py-3
            text-lg font-semibold
            rounded
            hover:bg-gray-500/50
            transition
          "
        >
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
