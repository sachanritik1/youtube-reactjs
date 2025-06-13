import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Set dark theme as default if no theme is set
  useEffect(() => {
    if (!localStorage.getItem("youtube-theme")) {
      setTheme("dark");
    }
  }, [setTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className={`z-50 relative ${
            theme === "dark"
              ? "bg-zinc-800 text-white border border-zinc-700"
              : "bg-gray-100"
          }`}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`z-50 ${
          theme === "dark"
            ? "bg-zinc-800 text-white border border-zinc-700"
            : "bg-white border border-gray-200"
        }`}
      >
        <DropdownMenuItem
          className={`${
            theme === "light"
              ? theme === "dark"
                ? "bg-zinc-700"
                : "bg-gray-100 font-medium"
              : ""
          } hover:bg-opacity-80`}
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${
            theme === "dark"
              ? theme === "dark"
                ? "bg-zinc-700 font-medium"
                : "bg-gray-100 font-medium"
              : ""
          } hover:bg-opacity-80`}
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4 mr-2" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
