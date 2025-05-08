import React from "react";
import Mystore from "../components/Mystore";
import { useAppContext } from "../Hooks/useAppContext";

const About = () => {
  const { value1 } = useAppContext();
  return (
    <div>
      <h1>{value1}</h1>;
      <Mystore />
    </div>
  );
};

export default About;
