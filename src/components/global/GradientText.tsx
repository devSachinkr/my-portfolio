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
        "bg-gradient-to-r text-transparent bg-clip-text ",
        className
      )}
    >
      <div className={twMerge("font-mono py-2", classes)}>{children}</div>
    </div>
  );
};

export default GradientText;
