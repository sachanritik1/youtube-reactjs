import React from "react";

const VideoContainerShimmer = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-2">
      {Array.from({ length: 12 }).map((value, index) => (
        <div
          key={index}
          className="col-span-1 row-span-1 w-80 h-72 bg-gray-100 "
        ></div>
      ))}
    </div>
  );
};

export default VideoContainerShimmer;
