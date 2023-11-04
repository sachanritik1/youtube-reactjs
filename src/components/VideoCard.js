import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;

  const todayDate = new Date();
  const publishedAtDate = new Date(publishedAt);
  const diffTime = Math.abs(todayDate - publishedAtDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  const diffSeconds = Math.ceil(diffTime / 1000);
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));

  let diffTimeText =
    diffYears >= 1
      ? diffYears + " years ago"
      : diffMonths >= 1
      ? diffMonths + " months ago"
      : diffDays >= 1
      ? diffDays + " days ago"
      : diffHours >= 1
      ? diffHours + " hours ago"
      : diffMinutes >= 1
      ? diffMinutes + " minutes ago"
      : diffSeconds >= 1
      ? diffSeconds + " seconds ago"
      : "Just now";

  return (
    <div className="p-2 m-2 w-72 ">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <div>
        <p className="font-extrabold py-1">{title}</p>
        <p className="font-semibold">{channelTitle}</p>
        <div className="flex justify-between">
          <p>{viewCount} views</p>
          <p>{diffTimeText}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
