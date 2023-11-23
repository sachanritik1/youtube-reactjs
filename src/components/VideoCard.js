import React from "react";
import { getDiffTimeText } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;

  const diffTimeText = getDiffTimeText(publishedAt);

  return (
    <div className="p-2 m-2 w-72 h-72 bg-slate-100 rounded-xl">
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
          <p>{viewCount} views</p>
          <p>{diffTimeText}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
