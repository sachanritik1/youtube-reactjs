import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search?suggestion=youtube shorts">Shorts</Link>
          </li>
          <li>
            <Link to="/search?suggestion=live streams">Live</Link>
          </li>
          <li>
            <Link to="/search?suggestion=trending videos">Trending</Link>
          </li>
        </ul>
        <h1 className="font-bold pt-3">Subscriptions</h1>
        <ul>
          <li>
            <Link to="/search?suggestion=latest music">Music</Link>
          </li>
          <li>
            <Link to="/search?suggestion=coding">coding</Link>
          </li>
          <li>
            <Link to="/search?suggestion=gaming">Gaming</Link>
          </li>
          <li>
            <Link to="/search?suggestion=trending">Trending</Link>
          </li>
        </ul>
        <h1 className="font-bold pt-3">Watch Later</h1>
        <ul>
          <li>
            <Link to="/search?suggestion=latest music">Music</Link>
          </li>
          <li>
            <Link to="/search?suggestion=coding">coding</Link>
          </li>
          <li>
            <Link to="/search?suggestion=gaming">Gaming</Link>
          </li>
          <li>
            <Link to="/search?suggestion=trending">Trending</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
