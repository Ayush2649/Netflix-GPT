import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <img className="absolute inset-0 h-full w-full object-cover -z-10" src={BACKGROUND} alt="bg" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearchPage;