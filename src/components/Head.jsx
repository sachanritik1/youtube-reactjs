import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  User,
  LogOut,
  Upload,
  Mic,
  ArrowLeft,
  Video,
  Monitor,
} from "lucide-react";

// Import Shadcn Components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const { theme } = useTheme();

  // Create a theme-aware icon class
  const themeClass = useMemo(() => {
    return theme === "dark" ? "text-white" : "";
  }, [theme]);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Debouncing for search suggestions
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    // Define getSuggestions inside useEffect to avoid linting error
    const getSuggestions = async () => {
      // API call logic preserved
      // const response = await fetch(GOOGLE_SEARCH_API + searchQuery);
      // const data = await response.json();
      // setSuggestions(data[1]);
      // dispatch(cacheResults({ [searchQuery]: data[1] }));

      // For testing - replace with actual API call
      setSuggestions([
        `${searchQuery} tutorials`,
        `${searchQuery} music`,
        `${searchQuery} trending`,
        `how to ${searchQuery}`,
      ]);
    };

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 220);
    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, dispatch]);

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/users/logout",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const data = await response.json();

      if (data.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?suggestion=${searchQuery}`);
      setIsMobileSearch(false);
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          theme === "dark"
            ? "bg-zinc-900 border-b border-zinc-800 text-white"
            : "bg-white border-b"
        }`}
      >
        {/* Mobile search view */}
        {isMobileSearch ? (
          <div className="flex items-center h-16 px-2">
            <Button
              variant={theme === "dark" ? "outline" : "ghost"}
              size="icon"
              className={`mr-2 ${themeClass}`}
              onClick={() => setIsMobileSearch(false)}
            >
              <ArrowLeft className={`h-5 w-5 ${themeClass}`} />
            </Button>

            <form className="flex-1 flex" onSubmit={handleSubmitSearch}>
              <div className="relative w-full">
                <Input
                  className={`w-full h-10 pr-10 rounded-full ${
                    theme === "dark" ? "bg-zinc-800 border-zinc-700" : ""
                  }`}
                  type="text"
                  placeholder="Search YouTube"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  type="submit"
                  size="icon"
                  variant={theme === "dark" ? "outline" : "ghost"}
                  className={`absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 ${themeClass}`}
                >
                  <Search className={`h-4 w-4 ${themeClass}`} />
                </Button>
              </div>
            </form>

            <Button
              variant={theme === "dark" ? "outline" : "ghost"}
              size="icon"
              className={`ml-2 ${themeClass}`}
            >
              <Mic className={`h-5 w-5 ${themeClass}`} />
            </Button>
          </div>
        ) : (
          /* Default header view */
          <div className="flex items-center justify-between h-16 px-4">
            {/* Left section: Menu & Logo */}
            <div className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={theme === "dark" ? "outline" : "ghost"}
                    size="icon"
                    onClick={toggleSidebarHandler}
                    className={`h-10 w-10 ${themeClass}`}
                  >
                    <Menu className={`h-5 w-5 ${themeClass}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Menu</TooltipContent>
              </Tooltip>

              <Link to="/" className="flex items-center ml-1">
                <img
                  className={`h-6`}
                  alt="YouTube"
                  src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                />
              </Link>
            </div>

            {/* Center section: Search */}
            <form
              className="hidden md:flex items-center justify-center max-w-xl w-full mx-4"
              onSubmit={handleSubmitSearch}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            >
              <div className="relative flex w-full max-w-[600px]">
                <div
                  className={`flex flex-grow rounded-l-full border ${
                    theme === "dark"
                      ? "bg-zinc-900 border-zinc-700"
                      : "bg-gray-50 border-gray-300"
                  }`}
                >
                  <Input
                    className={`rounded-l-full border-0 shadow-none pl-4 pr-2 h-10 ${
                      theme === "dark" ? "bg-zinc-900 text-white" : "bg-gray-50"
                    }`}
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  className={`rounded-r-full h-10 px-5 ${
                    theme === "dark"
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Search className={`h-5 w-5 ${themeClass}`} />
                </Button>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant={theme === "dark" ? "outline" : "ghost"}
                      size="icon"
                      className={`ml-2 rounded-full h-10 w-10 ${themeClass}`}
                    >
                      <Mic className={`h-5 w-5 ${themeClass}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Search with your voice</TooltipContent>
                </Tooltip>
              </div>

              {/* Search suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  className={`absolute top-[48px] left-1/2 transform -translate-x-1/2 w-full max-w-[600px] rounded-xl shadow-lg ${
                    theme === "dark"
                      ? "bg-zinc-900 border border-zinc-700 text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <ul className="py-2">
                    {suggestions.map((suggestion) => (
                      <Link
                        to={`/search?suggestion=${suggestion}`}
                        key={suggestion}
                        onClick={() => setSearchQuery(suggestion)}
                      >
                        <li
                          className={`px-4 py-2 flex items-center ${
                            theme === "dark"
                              ? "hover:bg-zinc-800"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <Search
                            className={`h-4 w-4 mr-4 opacity-60 ${themeClass}`}
                          />
                          <span>{suggestion}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </form>

            {/* Right section: Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Mobile search button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={theme === "dark" ? "outline" : "ghost"}
                    size="icon"
                    className={`md:hidden h-10 w-10 rounded-full ${themeClass}`}
                    onClick={() => setIsMobileSearch(true)}
                  >
                    <Search className={`h-5 w-5 ${themeClass}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Search</TooltipContent>
              </Tooltip>

              {/* Create/Upload button */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={theme === "dark" ? "outline" : "ghost"}
                        size="icon"
                        className={`hidden sm:flex h-10 w-10 rounded-full ${themeClass}`}
                      >
                        <Upload className={`h-5 w-5 ${themeClass}`} />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Create</TooltipContent>
                </Tooltip>
                <DropdownMenuContent
                  align="end"
                  className={`w-52 ${
                    theme === "dark"
                      ? "bg-zinc-900 text-white border-zinc-700"
                      : ""
                  }`}
                >
                  <DropdownMenuItem>
                    <Upload className={`mr-2 h-4 w-4 ${themeClass}`} />
                    Upload Video
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Video className={`mr-2 h-4 w-4 ${themeClass}`} />
                    Go Live
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Notifications button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={theme === "dark" ? "outline" : "ghost"}
                    size="icon"
                    className={`hidden sm:flex h-10 w-10 rounded-full ${themeClass}`}
                  >
                    <Bell className={`h-5 w-5 ${themeClass}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>

              {/* Theme toggle with tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={themeClass}>
                    <ThemeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Appearance</TooltipContent>
              </Tooltip>

              {/* User menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={theme === "dark" ? "outline" : "ghost"}
                    size="icon"
                    className={`h-10 w-10 rounded-full overflow-hidden ${themeClass}`}
                  >
                    <Avatar className="h-8 w-8 border">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className={`w-56 ${
                    theme === "dark"
                      ? "bg-zinc-900 text-white border-zinc-700"
                      : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 p-2 border-b ${
                      theme === "dark" ? "border-zinc-700" : ""
                    }`}
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">User Name</span>
                      <span
                        className={`text-xs ${
                          theme === "dark"
                            ? "text-gray-400"
                            : "text-muted-foreground"
                        }`}
                      >
                        user@example.com
                      </span>
                    </div>
                  </div>
                  <DropdownMenuItem>
                    <User className={`mr-2 h-4 w-4 ${themeClass}`} />
                    Your channel
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Monitor className={`mr-2 h-4 w-4 ${themeClass}`} />
                    YouTube Studio
                  </DropdownMenuItem>
                  <DropdownMenuSeparator
                    className={theme === "dark" ? "bg-zinc-700" : ""}
                  />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className={`mr-2 h-4 w-4 ${themeClass}`} />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </header>
    </TooltipProvider>
  );
};

export default Head;
