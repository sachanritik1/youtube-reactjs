import VideoCard from "./VideoCard";
import VideoContainerShimmer from "../shimmer/VideoContainerShimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const { videos } = useSelector((store) => store.videos);
  if (videos.length === 0) return <VideoContainerShimmer />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4 ">
      {videos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </div>
  );
};

export default VideoContainer;
