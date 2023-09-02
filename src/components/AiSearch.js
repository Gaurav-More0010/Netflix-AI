import React from "react";
import AiSearchBar from "./AiSearchBar";
import AiMovieSuggestion from "./AiMovieSuggestion";
import { BG_URL } from "../utils/constants";

const AiSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <AiSearchBar />
      <AiMovieSuggestion />
    </div>
  );
};

export default AiSearch;
