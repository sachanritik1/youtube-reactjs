import { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../utils/appSlice";
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
    const data = await fetch(import.meta.env.VITE_API_URL + "/videos/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    const json = await data.json();
    dispatch(setVideos(json.data));
  };

  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
