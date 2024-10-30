import { dummy } from "@/lib/constants";
import React from "react";

import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SkillSection from "./skill-section";
type Props = {
  data: typeof dummy;
};

const SkillView = ({ data }: Props) => {
  return (
    <div className="border-2 border-red-500 w-full h-[60vh] p-10 flex gap-3">
      <SortableContext items={data} strategy={horizontalListSortingStrategy}>
        {data.map((skill) => (
            <SkillSection data={skill} key={skill.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default SkillView;
