import React from "react";

const AiSearchBar = () => {
  return (
    <div className="pt-[10%] flex flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button className="m-4 col-span-3 bg-red-700 rounded-lg text-white py-2 px-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
