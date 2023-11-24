import React from "react";

const VideoContainerShimmer = () => {
  return (
    <div className="flex flex-wrap ">
      {Array.from({ length: 12 }).map((value, index) => (
        <div
          key={index}
          className="m-2 w-72 h-72 bg-gray-100 rounded-xl border-spacing-2"
        ></div>
      ))}
    </div>
  );
};

export default VideoContainerShimmer;
