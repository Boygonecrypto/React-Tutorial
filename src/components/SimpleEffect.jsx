import React from "react";
import { useState, useEffect } from "react";
//re - renders - state change
// mounting phase (initial render)
//changing phase (re-render)
//unmount

// run side effects fecthing data (initially loading, when the component changes

//call back function, optional dependency array list ([] - once(initial)), [value1, value2])
const SimpleEffect = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(20);

  useEffect(() => {
    console.log("useeffect ran");
  }, [count]);
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-3">Use Effect Basics</h1>;
      <h1 className="text-3xl">{count}</h1>
      <button className="mybtn" onClick={() => setCount(count + 1)}>
        Change
      </button>
      <h1 className="text-3xl">{num}</h1>
      <button className="mybtn" onClick={() => setNum(num + 1)}>
        Change
      </button>
    </div>
  );
};

export default SimpleEffect;
