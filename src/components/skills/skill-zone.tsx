"use client";

import React from "react";
import { useSkills } from "@/hooks/skills";
import SkillView from "./skill-view";

const SkillZone = () => {
  const { allSkillData } = useSkills({});

  return <SkillView data={allSkillData} />;
};

export default SkillZone;
