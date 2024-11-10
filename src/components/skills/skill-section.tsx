import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skill } from "@prisma/client";
import { getIconURLByName } from "@/lib/constants";
import { useAuthUser } from "@/provider/auth";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import { useSkills } from "@/hooks/skills";
type Props = {
  data: Skill;
};

const SkillSection = ({ data: { id, name } }: Props) => {
  const { user } = useAuthUser();
  const { deleteSkillData } = useSkills({});

  return (
    <div className=" flex flex-col justify-center w-full items-center gap-4 flex-wrap ">
      <Avatar>
        <AvatarImage
          src={getIconURLByName(name.toLowerCase())}
          alt={name}
          width={50}
          height={50}
        />
        <AvatarFallback>Skill</AvatarFallback>
      </Avatar>
      {user && (
        <div className="bg-accent flex items-center justify-center w-10 h-5 rounded-full">
          <Popover>
            <PopoverTrigger>
              <Ellipsis />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-4 w-40">
              <Button
                className="bg-transparent border-[1px] border-purple-600 hover:bg-purple-600/40"
                onClick={() => deleteSkillData({ skillId: id })}
              >
                Delete
              </Button>
              <Button className="bg-transparent border-[1px] border-purple-600 hover:bg-purple-600/40">
                Hide
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default SkillSection;
