import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          process.env.REACT_APP_BASE_URL + "/users/me",
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
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
