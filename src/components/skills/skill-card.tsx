import React, { CSSProperties } from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  className?: string;
  style?: CSSProperties;
};

const SkillCard = ({ href, className, style }: Props) => {
  return (
    <Card
      className={twMerge(
        "bg-background  border-[2px] border-gray-500 rounded-md size-10  ",
        className
      )}
      style={style}
    >
      <CardContent className="w-10">
        <Avatar className="flex items-center justify-center w-10">
          <AvatarImage
            src={` https://devicon-website.vercel.app/api/${href}/original.svg`}
            className="size-6"

          />
          <AvatarFallback >
            {href}
          </AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
