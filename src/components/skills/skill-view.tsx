import React from "react";

import SkillSection from "./skill-section";
import { Skill } from "@prisma/client";
type Props = {
  data: Skill[];
};

const SkillView = ({ data }: Props) => {
  return (
    <div className=" w-full h-[60vh] p-10 flex gap-3">
      <div className="relative h-full w-full flex  items-center justify-center gap-5">
        <div className=" -z-10 bg-gradient-to-bl right-5 from-purple-600 via-lime-800 to-blue-600 blur-[90px] w-[350px] h-[350px] absolute rounded-full opacity-[0.8] "/>
      
        
          {data.map((skill) => (
            <SkillSection data={skill} key={skill.id} />
          ))}
      </div>
    </div>
  );
};

export default SkillView;
