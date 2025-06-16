import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Head from "./Head";
import { useTheme } from "./theme-provider";
import { gql } from "@apollo/client";
import useGetUser from "../hooks/use-get-user";

const USER_QUERY = gql`
  query FetchUser {
    me {
      email
      fullName
    }
  }
`;

const Body = () => {
  const { loading, error } = useGetUser(USER_QUERY);
  const navigate = useNavigate();
  const { theme } = useTheme();

  if (loading) {
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

  if (error) {
    return (
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
  }

  return (
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
  );
};

export default Body;
