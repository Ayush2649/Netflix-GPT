import { useState } from "react";

const MovieDescription = ({ overview }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-1/2">
      <p
        className={`text-lg text-gray-300 mt-2 ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {overview}
      </p>

      {overview.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-lg text-white mt-1 hover:underline"
        >
          {expanded ? "Show less" : "More"}
        </button>
      )}
    </div>
  );
};

export default MovieDescription;
