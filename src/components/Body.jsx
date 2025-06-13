import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Head from "./Head";
import { useTheme } from "./theme-provider";

const Body = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { theme } = useTheme();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/users/me",

          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        const data = await response.json();

        if (!data.success) {
          navigate("/signin");
        } else {
          setUser(data.data);
        }
      } catch (err) {
        console.log(err);
        navigate("/signin");
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [navigate]);

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-background text-foreground" : "bg-slate-300"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-background text-foreground" : "bg-white"
      }`}
    >
      <Head />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg font-medium mb-2">Session expired</p>
        <p className="text-sm text-muted-foreground mb-4">
          Please sign in to continue
        </p>
        <button
          onClick={() => navigate("/signin")}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Body;
