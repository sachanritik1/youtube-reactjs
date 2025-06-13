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
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 p-4">
      <div className="flex flex-col w-full lg:w-3/4 gap-6">
        <div className="rounded-lg overflow-hidden shadow-md">
          <video
            className="w-full aspect-video object-contain bg-black"
            src={video?.videoFile?.url}
            controls
            autoPlay
          ></video>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{video.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={video.owner?.avatar?.url}
                alt={video.owner?.username}
              />
              <div>
                <p className="font-medium">{video.owner?.username}</p>
                <p className="text-sm text-muted-foreground">
                  {video.views} views
                </p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-4">{video.description}</p>
        </div>

        <div className="space-y-4 mt-4">
          <h2 className="text-xl font-semibold">Comments</h2>
          <CreateComment
            parent={null}
            videoId={video._id}
            setComments={setComments}
          />
          <CommentsContainer comments={comments} />
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <LiveChatBox />
      </div>
    </div>
  );
};

export default WatchPage;
