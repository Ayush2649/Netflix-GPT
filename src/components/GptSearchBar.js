import { useSelector } from "react-redux";
import lang from "../utils/languageComponent";

const GptSearchBar = () => {

    const langKey = useSelector((state) => state.config.lang);

  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input className='p-4 m-4 col-span-10' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 rounded text-white col-span-2' type='submit'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;