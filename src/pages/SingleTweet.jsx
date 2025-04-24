import React from "react";
import { Link, useParams } from "react-router-dom";
import { tweets } from "../data";

// useParams - gives an object containing the route parameter
// {id: '3'}
const SingleTweet = () => {
  const { id } = useParams();
  const tweet = tweets.find((singleTweet) => singleTweet.id === id);

  return (
    <div className="container py-10">
      <div className="flex items-center gap-3 mb-2">
        <h1>{tweet.profileName}</h1>
        <p className="text-gray-300">@{tweet.handle}</p>
      </div>
      <p>{tweet.tweet}</p>
      <div className="flex gap-3">
        <p>{tweet.likes} likes</p>
        <p>{tweet.comments.length} comments</p>
      </div>
      <h1 className="font-bold mt-5 mb-2">Comments</h1>
      <div className="flex flex-col gap-1">
        {tweet.comments.map((comment, i) => {
          return <p key={i}>{comment}</p>;
        })}
      </div>
      <Link to="/timeline" className="btn btn-primary mt-10">
        Go back to timeline
      </Link>
    </div>
  );
};

export default SingleTweet;
