import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
type Props = {
  className: string;
  children: React.ReactNode;
};

const Circle = ({ className, children }: Props) => {
  return (
    <div
      className={twMerge(
        " hidden md:inline-flex bg-background size-[240px] justify-center rounded-full items-center relative  ",
        className
      )}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        className=" absolute inset-0 rounded-full outline outline-[6px] flex items-center justify-center -outline-offset-[6px] outline-[#a4f513]/10 border-[6px] border-transparent border-t-neon_green "
      ></motion.div>
      {children}
    </div>
  );
};

export default Circle;
