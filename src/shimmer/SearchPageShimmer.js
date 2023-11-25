import React from "react";

const SearchPageShimmer = () => {
  return (
    <div>
      {Array.from({ length: 4 }).map((value, index) => (
        <div
          key={index}
          className="flex p-2 m-2 h-52 w-full bg-slate-100 rounded-sm"
        ></div>
      ))}
    </div>
  );
};

export default SearchPageShimmer;
