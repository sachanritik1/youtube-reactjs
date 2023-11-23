import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../utils/contansts";
import { getDiffTimeText } from "../utils/helper";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const getSearchVideos = async (suggestion) => {
    const res = await fetch(YOUTUBE_SEARCH_VIDEOS_API + suggestion);
    const json = await res.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getSearchVideos(searchParams.get("suggestion"));
  }, [searchParams]);

  console.log("rendering search page");
  return (
    <div className="">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
            <div className="flex p-2 m-2w-72">
              <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
              <div className="flex flex-col ml-4">
                <p className="text-lg font-semibold">{video.snippet.title}</p>
                <div className="flex gap-10">
                  <p>{video?.snippet?.viewCount} views</p>
                  <p>{getDiffTimeText(video?.snippet?.publishedAt)}</p>
                </div>
                <p className="text-sm">✅ {video.snippet.channelTitle}</p>
                <p className="text-sm">{video.snippet.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
