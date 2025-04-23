import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="text-center py-7">
      <h1 className="text-4xl">Error 404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
    </div>
  );
};

export default Error404;
