import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChatBox from "../components/LiveChatBox";
import CreateComment from "../components/CreateComment";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/videos/" + videoId,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        const data = await response.json();
        if (!data.success) {
          return;
        }
        setVideo(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchVideo();

    async function fetchComments() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/comments/" + videoId,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        const data = await response.json();
        if (!data.success) {
          return;
        }
        console.log(data);
        setComments(data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchComments();
    dispatch(closeSidebar());
  }, []);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full">
      <div className="flex flex-col p-2">
        <div className="flex justify-center">
          <video
            className="rounded-lg object-contain"
            src={video?.videoFile?.url}
            controls
            autoPlay
            height={1000}
            width={2800}
          ></video>
        </div>
        <CreateComment
          parent={null}
          videoId={video._id}
          setComments={setComments}
        />
        <CommentsContainer comments={comments} />
      </div>
      <LiveChatBox />
    </div>
  );
};

export default WatchPage;
