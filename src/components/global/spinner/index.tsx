import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  loading: boolean;
  children?: React.ReactNode;
  className?: string;
  loaderClasses?: string;
};

const Spinner = ({ children, loading, className, loaderClasses }: Props) => {
  return loading ? (
    <div className={cn("w-full h-full", loaderClasses)}>
      <div className="custom-loader"></div>
    </div>
  ) : (
    <div className={cn(className)}>{children}</div>
  );
};

export default Spinner;
