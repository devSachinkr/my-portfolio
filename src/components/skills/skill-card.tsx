import React from "react";
import { CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
type Props = {
  href: string;
  className?: string;
  rotate: number;
};

const SkillCard = ({ href, className, rotate }: Props) => {
  return (
    <motion.div
      initial={{
        translate: "-50%  -50%",
        rotate: -rotate,
      }}
      animate={{
        rotate: [
          -rotate,
          -rotate - 45,
          -rotate - 45,
          -rotate - 90,
          -rotate - 90,
          -rotate - 135,
          -rotate - 135,
          -rotate - 180,
          -rotate - 180,
          -rotate - 225,
          -rotate - 225,
          -rotate - 270,
          -rotate - 270,
          -rotate - 315,
          -rotate - 315,
          -rotate - 360,
          -rotate - 360,
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
      }}
      className={twMerge(
        "bg-background  border-[2px] border-gray-500 rounded-md size-10  ",
        className
      )}
    >
      <CardContent className="w-10">
        <Avatar className="flex items-center justify-center w-10">
          <AvatarImage
            src={` https://devicon-website.vercel.app/api/${href}/original.svg`}
            className="size-6"
          />
          <AvatarFallback>{href}</AvatarFallback>
        </Avatar>
      </CardContent>
    </motion.div>
  );
};

export default SkillCard;
