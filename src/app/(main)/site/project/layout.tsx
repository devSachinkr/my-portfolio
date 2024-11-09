import Navbar from "@/components/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-5 ">
      <Navbar />
      <div className="">
      {children}
      </div>
    </div>
  );
};

export default layout;
