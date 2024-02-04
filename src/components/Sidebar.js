import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    headingTitle: null,
    links: [
      { to: "/", title: "Home" },
      { to: "/search?suggestion=shorts", title: "Shorts" },
      { to: "/search?suggestion=live", title: "Live" },
      { to: "/search?suggestion=music", title: "Music" },
    ],
  },
  {
    headingTitle: "Subscriptions",
    links: [
      { to: "/search?suggestion=sports", title: "Sports" },
      { to: "/search?suggestion=coding", title: "Coding" },
      { to: "/search?suggestion=gaming", title: "Gaming" },
      { to: "/search?suggestion=trending", title: "Trending" },
    ],
  },
  {
    headingTitle: "Watch Later",
    links: [
      { to: "/search?suggestion=cricket", title: "Cricket" },
      { to: "/search?suggestion=hollywood", title: "Hollywood" },
      { to: "/search?suggestion=hindi", title: "Hindi" },
      { to: "/search?suggestion=telugu", title: "Telugu" },
    ],
  },
];

const LinkComponent = ({ to, title }) => {
  const search = useLocation().search.split("=")[1];
  const path = search ? search : "home";
  const toPath = to.split("=")[1] ? to.split("=")[1] : "home";
  return (
    <Link to={to}>
      <li
        className={
          toPath === path
            ? "bg-slate-200 rounded-lg px-2 py-1 cursor-pointer"
            : "hover:bg-slate-200 rounded-lg px-2 py-1 cursor-pointer"
        }
      >
        {title}
      </li>
    </Link>
  );
};

const HeadingComponent = ({ title }) => {
  return (
    <div className={title ? "font-bold px-2 py-2 text-gray-600" : "hidden"}>
      <p>{title}</p>
    </div>
  );
};

const GroupComponent = ({ links, title }) => {
  return (
    <div className="shadow mb-4 py-2 px-2">
      <HeadingComponent title={title} />
      {links.map((link, index) => {
        const { to, title } = link;
        return (
          <ul key={index}>
            <LinkComponent to={to} title={title} />
          </ul>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className="mr-48">
      <div className="w-48 shadow-lg fixed px-3 py-2 top-16 bg-white h-full">
        {menuItems.map((item, index) => (
          <GroupComponent
            key={index}
            title={item.headingTitle}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
