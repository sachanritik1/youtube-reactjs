import React from "react";

const VideoContainerShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 12 }).map((value, index) => (
        <div key={index} className="m-2 w-72 h-72 bg-gray-100 rounded-xl"></div>
      ))}
    </div>
  );
};

export default VideoContainerShimmer;
