import React from "react";
import MovieDescription from "./MovieDescription";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute
        top-[30%] md:top-[35%]
        px-4 md:px-12
        text-white
        max-w-[90%] md:max-w-[50%]
      "
    >
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
        {title}
      </h1>

      {/* Hide description on mobile */}
      <div className="hidden md:block">
        <MovieDescription overview={overview} />
      </div>

      <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
        {/* Play Button */}
        <button
          className="
            flex items-center gap-2
            bg-white text-black
            px-4 md:px-8 py-2
            text-sm md:text-lg
            font-semibold
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
            px-5 md:px-10 py-2
            text-sm md:text-lg
            font-semibold
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

