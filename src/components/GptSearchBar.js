import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageComponent";
import { useRef, useState } from "react";
import { parseQuery } from "../utils/smartSearch";
import { fetchSmartMovies } from "../utils/tmdbSmartFetch";
import { addGptMovies } from "../utils/movieSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
  if (!searchText.current.value.trim()) return;

  setLoading(true);

  try {
    const filters = parseQuery(searchText.current.value);
    const movies = await fetchSmartMovies(filters);
    dispatch(addGptMovies(movies));
  } catch (err) {
    console.error("TMDB Smart Search error:", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="pt-[30%] md:pt-[8%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className={`py-2 px-4 m-4 rounded text-white col-span-3 ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-700"
          }`}
          disabled={loading}
          onClick={handleGptSearchClick}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
