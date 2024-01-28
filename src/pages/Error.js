import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex-col justify-center items-center">
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/" className="text-blue-400 hover:text-blue-800">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
