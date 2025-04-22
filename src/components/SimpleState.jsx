import React from "react";
import { useState } from "react";
const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name === "Declan") {
      setName("Saka");
    } else {
      setName("Declan");
    }
  };
  const [num, setNum] = useState(0);
  //increase,
  const handleIncrease = () => {
    setNum(num + 1);
  };

  // decrease
  const handleDecrease = () => {
    setNum(num - 1);
  };

  const details = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia distinctio officiis veritatis. Officia maiores numquam quisquam? Fugit accusamus dolor qui, iste deserunt adipisci quas recusandae a nobis
vitae ipsum! Quis molestias corporis corrupti a cum debitis fuga ut
  quisquam alias. Tempore repudiandae enim cum consequatur in, neque
  reiciendis quaerat!`;

  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);
  };

  return (
    <div className="py-10 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold">UseState 1</h1>
        <p>My name is {name}</p>
        <button className="mybtn" onClick={handleNameChange}>
          Change Name
        </button>

        <h1 className="text-4xl my-3.5">{num}</h1>
        <button className="mybtn" onClick={handleIncrease}>
          Increase
        </button>
        <button className="mybtn mx-3" onClick={() => setNum(0)}>
          Reset
        </button>
        <button className="mybtn" onClick={handleDecrease}>
          Decrease
        </button>
      </div>

      <div className="max-w-[600px] mx-auto p-3 shadow-lg">
        <h1 className="text-4xl font-bold">Top Football</h1>
        <h2 className="text-2xl text-red-500">
          Madrid Demolished at the Emirates stadium
        </h2>
        <p className="mb-2">
          {show ? details : `${details.substr(0, 100)}...`}
        </p>
        <button className="mybtn" onClick={handleShowDetails}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default SimpleState;
