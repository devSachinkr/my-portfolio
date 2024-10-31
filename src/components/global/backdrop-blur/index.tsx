import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
};
const BackdropBlur = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        " rounded-full w-full z-50  blur-[90px]  opacity-[0.4] ",
        className
      )}
    />
  );
};

export default BackdropBlur;
