import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
};
const BackdropBlur = ({ className }: Props) => {
  return (
    <div className=" w-screen relative">
      <div
        className={twMerge(
          " rounded-full   blur-[90px]  opacity-[0.4] top-0 right-0 absolute",
          className
        )}
      />
    </div>
  );
};

export default BackdropBlur;
