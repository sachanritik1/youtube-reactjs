import { useDispatch } from "react-redux";
import { setVideos } from "../utils/videosSlice";
import { useTheme } from "./theme-provider";
const buttonList = [
  "All",
  "Javascript",
  "Ruby",
  "Python",
  "Java",
  "CSS",
  "HTML",
  "React",
  "Rails",
  "SQL",
  "Redux",
  "Django",
  "Cricket",
  "Football",
  "Music",
  "Coding",
  "Maths",
  "Science",
  "ML",
  "AI",
  "DS",
  "CS",
  "CV",
];

const ButtonList = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const getVideos = async (suggestion) => {
    if (suggestion === "All") suggestion = "";
    setVideos([]);
    const data = await fetch(
      `${import.meta.env.VITE_API_URL}/videos?search=${suggestion}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    );
    const json = await data.json();
    dispatch(setVideos(json.data));
  };

  return (
    <div className={`mb-12 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div
        className={`flex overflow-x-auto fixed z-10 w-full py-2 scrollbar-thin scrollbar-thumb-gray-400 whitespace-nowrap ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
        style={{
          msOverflowStyle: "none" /* IE and Edge */,
          scrollbarWidth: "thin" /* Firefox */,
          WebkitOverflowScrolling: "touch" /* Smooth scrolling on iOS */,
        }}
      >
        <div className="flex px-2 flex-nowrap">
          {buttonList.map((buttonName, index) => (
            <button
              className={`px-3 py-1 m-2 rounded-lg flex-shrink-0 ${
                theme === "dark"
                  ? "bg-slate-700 text-foreground hover:bg-slate-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              key={index}
              onClick={() => getVideos(buttonName)}
            >
              {buttonName}
            </button>
          ))}
          {/* Add extra space at the end to ensure last items are reachable when sidebar is open */}
          <div className="min-w-[200px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
