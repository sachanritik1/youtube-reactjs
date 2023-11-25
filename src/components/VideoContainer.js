import VideoCard from "./VideoCard";
import VideoContainerShimmer from "../shimmer/VideoContainerShimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const { videos } = useSelector((store) => store.videos);
  if (videos.length === 0) return <VideoContainerShimmer />;

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
