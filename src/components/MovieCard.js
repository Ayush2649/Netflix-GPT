import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath, onClick }) => {
  if (!posterPath) return null;

  return (
    <div
      className="w-52 md:w-52 pr-4 shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={onClick}
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
