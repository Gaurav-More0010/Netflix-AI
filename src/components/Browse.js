import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import AiSearch from "./AiSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showAiSearch = useSelector((store) => store.ai.showAiSearch);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showAiSearch ? (
        <AiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
