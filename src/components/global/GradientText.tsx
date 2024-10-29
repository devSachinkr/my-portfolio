import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className: string;
  classes?: string;
  children?: React.ReactNode;
};

const GradientText = ({ className, classes, children }: Props) => {
  return (
    <div
      className={twMerge(
        "bg-gradient-to-r text-transparent bg-clip-text relative",
        className
      )}
    >
      <div className={twMerge("font-mono", classes)}>{children}</div>
    </div>
  );
};

export default GradientText;
