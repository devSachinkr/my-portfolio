import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
};

const Spinner = ({ children, loading, className }: Props) => {
  return loading ? (
    <div className="w-full h-full custom-loader" />
  ) : (
    <div className={cn(className)}>{children}</div>
  );
};

export default Spinner;
