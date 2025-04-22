import React from "react";

const EventHandling = () => {
  const handleClick = () => {
    alert("welcome user");
  };
  const handleClickAgain = (name) => {
    alert(`Welcome ${name}`);
  };
  //handleClick()
  //whenver your event handler takes in a parameter
  //to use it you have to put in another function
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl">Responding to User Interactions</h1>
      <button className="mybtn" onClick={handleClick}>
        Click Me
      </button>
      <button className="mybtn ml-3" onClick={() => handleClickAgain("John")}>
        Click Again
      </button>
    </div>
  );
};

export default EventHandling;
