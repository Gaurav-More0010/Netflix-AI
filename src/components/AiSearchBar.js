import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const AiSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleAiSearchClick = async () => {
    console.log(searchText.current.value);

    //const airesults = await function main() {
    const aiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Sholay, Don, Bahubali, RRR, KGF";
    const aiResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(aiResults.choices);
  };
  return (
    <div className="pt-[10%] flex flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].aiSearchPlaceHolder}
        />
        <button
          className="m-4 col-span-3 bg-red-700 rounded-lg text-white py-2 px-4"
          onClick={handleAiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
