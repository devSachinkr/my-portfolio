import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
type Props = {
  className: string;
  children: React.ReactNode;
  animate?: boolean;
};

const Circle = ({ className, children, animate }: Props) => {
  return (
    <div
      className={twMerge(
        " hidden lg:inline-flex bg-background size-[240px] justify-center rounded-full items-center relative  ",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
        className={twMerge(
          " absolute inset-0 rounded-full outline outline-[6px] flex items-center justify-center -outline-offset-[6px] outline-purple-900/35 border-[6px] border-transparent  ",
          animate && "border-t-lime-500"
        )}
      ></motion.div>
      {children}
    </div>
  );
};

export default Circle;
