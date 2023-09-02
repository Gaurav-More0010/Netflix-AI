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
    const aiResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
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
