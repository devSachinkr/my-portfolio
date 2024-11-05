import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skill } from "@prisma/client";
import { getIconURLByName } from "@/lib/constants";
type Props = {
  data: Skill;
};

const SkillSection = ({ data: { id, name } }: Props) => {
 
  return (
    <div>
      <Avatar onClick={()=>alert(id)}>
        <AvatarImage
          src={getIconURLByName(name)}
          alt={name}
          width={50}
          height={50}
        />
        <AvatarFallback>Skill</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SkillSection;
