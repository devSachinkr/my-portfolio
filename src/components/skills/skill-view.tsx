import { dummy } from "@/lib/constants";
import React from "react";

import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SkillSection from "./skill-section";
import BackdropBlur from "../global/backdrop-blur";
type Props = {
  data: typeof dummy;
};

const SkillView = ({ data }: Props) => {
  return (
    <div className=" w-full h-[60vh] p-10 flex gap-3">
      <div className="relative h-full w-full bg-background flex  items-center justify-center gap-5">
        <div className="bg-gradient-to-bl right-5 from-purple-600 via-lime-800 to-blue-600 blur-[90px] w-[350px] h-[350px] absolute rounded-full opacity-[0.8] "/>
       
        <BackdropBlur className="absolute right-[50%] bg-gradient-to-l from-purple-600 to-fuchsia-500" />
        <SortableContext items={data} strategy={horizontalListSortingStrategy}>
          {data.map((skill) => (
            <SkillSection data={skill} key={skill.id} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default SkillView;
