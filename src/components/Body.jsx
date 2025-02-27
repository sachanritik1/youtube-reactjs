import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/users/me",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        );
        const data = await response.json();
        console.log(data);
        if (!data.success) {
          navigate("/signin");
        }
        setUser(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);
  return user ? (
    <div>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Body;
