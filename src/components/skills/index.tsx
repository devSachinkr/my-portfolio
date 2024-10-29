import React from "react";
import GradientText from "../global/GradientText";


const Skills = () => {
  return (
    <div className="container w-screen overflow-hidden" id="skill">
      <h1 className="flex items-center justify-center w-full text-6xl font-semibold">
      
          
            <GradientText
              className="from-purple-800 via-fuchsia-500 to-purple-800 "
              classes="md:text-[5rem]  font-semibold"
            >
              Skills
            </GradientText>
      </h1>
    </div>
  );
};

export default Skills;
