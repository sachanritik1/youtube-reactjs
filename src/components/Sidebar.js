import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className="mr-48">
      <div className="w-48 shadow-lg p-4 fixed top-16 bg-white h-full">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Live</li>
          <li>Trending</li>
        </ul>
        <h1 className="font-bold pt-3">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>coding</li>
          <li>Gaming</li>
          <li>Trending</li>
        </ul>
        <h1 className="font-bold pt-3">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Coding</li>
          <li>Gaming</li>
          <li>Trending</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
