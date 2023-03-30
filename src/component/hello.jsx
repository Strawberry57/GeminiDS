import React from "react";
import "./hello.css";
import axios from "axios";

import { TypeAnimation } from "react-type-animation";
function Hello() {
  return (
    <div className="hello">
      abc
      <TypeAnimation
        sequence={[
          "One ... \r next....",
          "Next Steppppp.....", // Types 'One'
          1000, // Waits 1s
          "Two", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Two three",
          3000,
          "123", // Types 'One'
          2000, // Types 'Three' without deleting 'Two'
          () => {
            return "abc";
          },
        ]}
        className="text"
        wrapper="div"
        cursor={false}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
}

export default Hello;
