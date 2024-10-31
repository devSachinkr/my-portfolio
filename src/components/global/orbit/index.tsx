import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Orbit = ({ className, children }: Props) => {
  return (
    <div
      className={twMerge(
        "w-52  h-52 border-[2px] border-gray-500 rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Orbit;
