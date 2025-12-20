import { useSelector } from "react-redux";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND } from "../utils/constants";

const GptSearchPage = () => {
  const gptMovies = useSelector((store) => store.movies.gptMovies);

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10"
        src={BACKGROUND}
        alt="bg"
      />

      {/* Search bar */}
      <GptSearchBar />

      {/* 🔥 Search results */}
      {gptMovies && gptMovies.length > 0 && (
        <GptMovieSuggestion movies={gptMovies} />
      )}
    </div>
  );
};

export default GptSearchPage;
