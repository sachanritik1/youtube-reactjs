import React from "react";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../utils/contansts";
import { useDispatch } from "react-redux";
import { setVideos } from "../utils/videosSlice";
const buttonList = [
  "All",
  "Javascript",
  "Ruby",
  "Python",
  "Java",
  "CSS",
  "HTML",
  "React",
  "Rails",
  "SQL",
  "Redux",
  "Django",
  "Cricket",
  "Football",
  "Music",
  "Coding",
  "Maths",
  "Science",
  "ML",
  "AI",
  "DS",
  "CS",
  "CV",
];

const ButtonList = () => {
  const dispatch = useDispatch();
  const getVideos = async (suggestion) => {
    if (suggestion === "All") suggestion = "";
    setVideos([]);
    const res = await fetch(YOUTUBE_SEARCH_VIDEOS_API + suggestion);
    const json = await res.json();
    dispatch(setVideos(json.items));
  };
  return (
    <div className="mb-12 bg-white">
      <div className="flex overflow-x-auto fixed z-10 bg-white">
        {buttonList.map((buttonName, index) => (
          <button
            className="px-3 py-1 m-2 rounded-lg  bg-gray-200"
            key={index}
            onClick={() => getVideos(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
