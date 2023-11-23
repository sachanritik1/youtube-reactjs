import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contansts";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (videos.length === 0)
    return (
      <div className="flex flex-wrap -z-50">
        {Array.from({ length: 12 }).map((index) => (
          <div
            key={index}
            className="m-2 w-72 h-72 bg-gray-100 rounded-xl border-spacing-2"
          ></div>
        ))}
      </div>
    );

  return (
    <div className="flex flex-wrap -z-50 relative">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
