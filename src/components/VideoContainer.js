import VideoCard from "./VideoCard";
import VideoContainerShimmer from "../shimmer/VideoContainerShimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const { videos } = useSelector((store) => store.videos);
  if (videos.length === 0) return <VideoContainerShimmer />;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-2">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
