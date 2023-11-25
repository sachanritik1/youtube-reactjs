import React, { useEffect, useState, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../utils/contansts";
import { getDiffTimeText } from "../utils/helper";
import SearchPageShimmer from "../shimmer/SearchPageShimmer";
export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const getSearchVideos = useCallback(
    async (suggestion) => {
      const res = await fetch(YOUTUBE_SEARCH_VIDEOS_API + suggestion);
      const json = await res.json();
      setVideos(json.items);
    },
    [videos]
  );

  useEffect(() => {
    getSearchVideos(searchParams.get("suggestion"));
  }, [searchParams]);

  if (videos.length === 0) {
    return <SearchPageShimmer />;
  }

  return (
    <div className="">
      {videos.map((video) => {
        return (
          <Link
            to={"/watch?v=" + video.id.videoId}
            key={video.id.videoId}
            className="flex p-2 m-2 h-52 bg-slate-100 rounded-sm"
          >
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
          </Link>
        );
      })}
    </div>
  );
};
