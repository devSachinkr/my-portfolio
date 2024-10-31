"use client";

import React from "react";
import { useSkills } from "@/hooks/skills";
import { closestCorners, DndContext } from "@dnd-kit/core";
import SkillView from "./skill-view";

const SkillZone = () => {
  const { dragEnd, skills } = useSkills();

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={dragEnd}>
      <SkillView data={skills} />
    </DndContext>
  );
};

export default SkillZone;
