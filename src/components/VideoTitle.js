import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video sbg-gradient-to-r from-black text-white absolute pt-[20%] px-24">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-opacity-50 rounded-lg bg-gray-500 text-white p-4 w-18 px-12 text-xl mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
