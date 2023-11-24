import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../utils/appSlice";
import { YOUTUBE_VIDEO_API } from "../utils/contansts";
import { setVideos } from "../utils/videosSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(setVideos(json.items));
  };

  return (
    <div>
      <ButtonList />

      <VideoContainer />
    </div>
  );
};

export default MainContainer;
