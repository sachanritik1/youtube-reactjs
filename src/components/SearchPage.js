import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../utils/contansts";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const suggestion = searchParams.get("suggestion");
  const [videos, setVideos] = useState([]);

  const getSearchVideos = async () => {
    const res = await fetch(YOUTUBE_SEARCH_VIDEOS_API + suggestion);
    const json = await res.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getSearchVideos();
  }, []);
  return (
    <div className="">
      {videos.map((video) => {
        return (
          <div className="flex flex-col">
            <iframe
              height="315"
              width="560"
              src={"https://www.youtube.com/embed/" + video.id.videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
            ></iframe>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">{video.snippet.title}</h1>
              <h2 className="text-sm">{video.snippet.channelTitle}</h2>
              <p className="text-sm">{video.snippet.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
