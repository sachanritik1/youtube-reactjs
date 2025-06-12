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
      const data = await fetch(
        `${import.meta.env.VITE_API_URL}/videos?search=${suggestion}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const json = await data.json();
      setVideos(json.data);
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
        const { title, thumbnail, owner, views, diffTimeText } = video;
        return (
          <Link
            to={"/watch?v=" + video.id}
            key={video.id}
            className="flex p-2 m-2 h-52 bg-slate-100 rounded-sm"
          >
            <img
              className="rounded-lg object-contain"
              alt="thumbnail"
              src={thumbnail?.url}
            />
            <div>
              <p className="font-bold py-1">
                {String(title).length < 61
                  ? title
                  : String(title).substring(0, 58) + "..."}
              </p>
              <p className="font-gray">{owner?.username}</p>
              <div className="flex justify-between">
                <p>{views} views</p>
                <p>{diffTimeText}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
