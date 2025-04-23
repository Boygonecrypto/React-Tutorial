import React from "react";
import { Link } from "react-router-dom";

const SingleTweet = () => {
  return (
    <div className="py-4">
      SingleTweet
      <Link to="/timeline" className="btn btn-primary">
        Go back to timeline
      </Link>
    </div>
  );
};

export default SingleTweet;
