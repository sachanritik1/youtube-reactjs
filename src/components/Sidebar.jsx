import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Video,
  Radio,
  Music,
  Trophy,
  Code,
  Gamepad2,
  TrendingUp,
  Film,
  Languages,
  BookMarked,
  Gamepad,
} from "lucide-react";
import { cn } from "../utils/shadcn-utils";

const menuItems = [
  {
    headingTitle: null,
    links: [
      { to: "/", title: "Home", icon: <Home className="h-4 w-4 mr-2" /> },
      {
        to: "/search?suggestion=shorts",
        title: "Shorts",
        icon: <Video className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=live",
        title: "Live",
        icon: <Radio className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=music",
        title: "Music",
        icon: <Music className="h-4 w-4 mr-2" />,
      },
    ],
  },
  {
    headingTitle: "Subscriptions",
    links: [
      {
        to: "/search?suggestion=sports",
        title: "Sports",
        icon: <Trophy className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=coding",
        title: "Coding",
        icon: <Code className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=gaming",
        title: "Gaming",
        icon: <Gamepad2 className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=trending",
        title: "Trending",
        icon: <TrendingUp className="h-4 w-4 mr-2" />,
      },
    ],
  },
  {
    headingTitle: "Watch Later",
    links: [
      {
        to: "/search?suggestion=cricket",
        title: "Cricket",
        icon: <Gamepad className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=hollywood",
        title: "Hollywood",
        icon: <Film className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=hindi",
        title: "Hindi",
        icon: <Languages className="h-4 w-4 mr-2" />,
      },
      {
        to: "/search?suggestion=telugu",
        title: "Telugu",
        icon: <BookMarked className="h-4 w-4 mr-2" />,
      },
    ],
  },
];

const LinkComponent = ({ to, title, icon }) => {
  const search = useLocation().search.split("=")[1];
  const path = search ? search : "home";
  const toPath = to.split("=")[1] ? to.split("=")[1] : "home";
  return (
    <Link to={to}>
      <li
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
          toPath === path
            ? "bg-accent text-accent-foreground"
            : "hover:bg-accent/50 hover:text-accent-foreground"
        )}
      >
        {icon}
        {title}
      </li>
    </Link>
  );
};

const HeadingComponent = ({ title }) => {
  if (!title) return null;

  return (
    <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground tracking-tight">
      {title}
    </h3>
  );
};

const GroupComponent = ({ links, title }) => {
  return (
    <div className="mb-4">
      <HeadingComponent title={title} />
      <div className="space-y-1">
        {links.map((link, index) => {
          const { to, title, icon } = link;
          return (
            <ul key={index}>
              <LinkComponent to={to} title={title} icon={icon} />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className="mr-56">
      <div className="w-56 border-r fixed px-3 py-6 top-16 bg-background h-full overflow-auto">
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
