import React from "react";
import { use } from "react";
import { useRef, useEffect } from "react";
// useREF can hold mutable values (not trigger re-render)
// target dom elements (form, input)

const SimpleRef = () => {
  const headingContainer = useRef(null);
  console.log(headingContainer.current);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container">
      <h1 ref={headingContainer} className="text-3xl text-center">
        Use Ref
      </h1>
      <form className="myform">
        <label htmlFor="sub" className="mylabel">
          Subscribe to our news letter
        </label>
        <input
          ref={inputRef}
          type="email"
          placeholder="Email Address"
          className="input"
        />
        <button className="mybtn mt-1">Subscribe</button>
      </form>
    </div>
  );
};

export default SimpleRef;
