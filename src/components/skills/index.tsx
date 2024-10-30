import React from "react";
import GradientText from "../global/GradientText";
import SkillZone from "./skill-zone";

const Skills = () => {
  return (
    <div className="container w-screen h-screen overflow-hidden" id="skill">
      <h1 className="flex items-center justify-center w-full text-6xl font-semibold">
        <GradientText
          className="from-purple-800 via-fuchsia-500 to-purple-800 "
          classes="md:text-[5rem]  font-semibold"
        >
          Skills
        </GradientText>
      </h1>

      <div className="w-full flex flex-col md:flex-row mt-10 gap-5">
        <div className="md:w-[50%] flex "> 
          <SkillZone/>
        </div>
        <div className="md:w-[50%] flex justify-center items-center"> hlo ji</div>
      </div>
    </div>
  );
};

export default Skills;
