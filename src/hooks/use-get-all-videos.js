import { setVideos } from "../utils/videosSlice";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

const useGetAllVideos = (GET_ALL_VIDEOS, variables) => {
  const dispatch = useDispatch();
  useQuery(GET_ALL_VIDEOS, {
    variables: variables,
    onCompleted: (data) => {
      dispatch(setVideos(data.getAllVideos.videos));
    },
    onError: (error) => {
      console.error("Error fetching videos:", error);
    },
  });
};

export default useGetAllVideos;
