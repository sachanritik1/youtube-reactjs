import React from "react";
import { getDiffTimeText } from "../utils/helper";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { title, thumbnail, owner, views } = video;

  const diffTimeText = getDiffTimeText(video.createdAt);

  return (
    <Link to={"/watch?v=" + video._id} className="flex flex-col">
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
};

export default VideoCard;
