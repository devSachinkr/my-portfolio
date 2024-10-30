import { dummy } from "@/lib/constants";
import React, { CSSProperties } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  data: (typeof dummy)[0];
};

const SkillSection = ({ data: { id, image, name } }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style: CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Avatar>
        <AvatarImage src={image} alt={name} width={50} height={50} />
        <AvatarFallback>Skill</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default SkillSection;
