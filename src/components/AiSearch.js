import React from "react";
import AiSearchBar from "./AiSearchBar";
import AiMovieSuggestion from "./AiMovieSuggestion";

const AiSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <AiSearchBar />
      <AiMovieSuggestion />
    </div>
  );
};

export default AiSearch;
