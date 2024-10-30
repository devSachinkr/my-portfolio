"use client";
import { dummy } from "@/lib/constants";
import { KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState(dummy);

  const getSkillPos = (id: string) => {
    return skills.findIndex((skill) => skill.id === id);
  };
  const dragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over?.id) return;
    setSkills((prev) => {
      const originalPos = getSkillPos(active.id);
      const newPos = getSkillPos(over?.id);
      return arrayMove(prev,originalPos,newPos);
    });
  };
  const sensors=useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter:sortableKeyboardCoordinates
    })
  )
  return { dragEnd, skills ,sensors};
};

export { useSkills };
