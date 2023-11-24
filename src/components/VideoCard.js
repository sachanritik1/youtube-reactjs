import React from "react";
import { getDiffTimeText } from "../utils/helper";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, channelTitle, publishedAt } = snippet;
  const diffTimeText = getDiffTimeText(publishedAt);

  return (
    <Link
      to={"/watch?v=" + video.id}
      className="p-2 m-2 w-72 h-72 bg-slate-100 rounded-xl"
    >
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <div>
        <p className="font-bold py-1">
          {String(title).length < 61
            ? title
            : String(title).substring(0, 58) + "..."}
        </p>
        <p className="font-gray">{channelTitle}</p>
        <div className="flex justify-between">
          <p>{statistics?.viewCount} views</p>
          <p>{diffTimeText}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
