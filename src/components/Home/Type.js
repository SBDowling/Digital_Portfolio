import React from "react";
import Typewriter from "typewriter-effect";
import { typewriterLines } from "../../data/portfolio";

function Type() {
  return (
    <Typewriter
      options={{
        strings: typewriterLines,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
