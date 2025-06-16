import { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../utils/appSlice";
import useGetAllVideos from "../hooks/use-get-all-videos";
import { gql } from "@apollo/client";

const GET_ALL_VIDEOS = gql`
  query fetchAllVideos($page: Int, $limit: Int) {
    getAllVideos(page: $page, limit: $limit) {
      currentPage
      totalPages
      totalVideos
      videos {
        _id
        title
        thumbnail {
          url
        }
        owner {
          username
          avatar {
            url
          }
        }
        createdAt
        views
      }
    }
  }
`;

const MainContainer = () => {
  useGetAllVideos(GET_ALL_VIDEOS, {
    page: 1,
    limit: 20,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
