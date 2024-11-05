import SkillView from "@/components/skills/skill-view";
import { useSkills } from "@/hooks/skills";
import React from "react";

type Props = {
  userId: string;
};

const ExistingSkillContent = ({ userId }: Props) => {
  const { allSkillData } = useSkills({ userId });
  return (
    <div className="flex w-full h-full">
      <SkillView data={allSkillData} />
    </div>
  );
};

export default ExistingSkillContent;
