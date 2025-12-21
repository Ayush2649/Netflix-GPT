import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, onClick }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        w-28 sm:w-32 md:w-40 lg:w-52
        shrink-0 cursor-pointer
        transform hover:scale-105
        transition-transform duration-300
      "
      onClick={onClick}
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md object-cover"
      />
    </div>
  );
};

export default MovieCard;
