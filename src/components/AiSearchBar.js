import React from "react";

const AiSearchBar = () => {
  return (
    <div className="pt-[20%]">
      <form className=" w-1/2 m-6 bg-black">
        <input
          type="text"
          className="p-4 m-4"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 rounded-lg text-white py-2 px-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
