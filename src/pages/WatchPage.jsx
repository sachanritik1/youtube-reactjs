import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChatBox from "../components/LiveChatBox";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="flex w-full">
      <div className="flex flex-col p-2">
        <iframe
          height="550"
          width="1100"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <LiveChatBox />
    </div>
  );
};

export default WatchPage;
