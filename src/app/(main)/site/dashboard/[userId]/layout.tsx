import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

type Props = {
  params: {
  userId: string;
  };
  children: React.ReactNode;
};

const layout = ({ params: { userId }, children }: Props) => {
  return (
    <div className="flex gap-5 ">
      <Sidebar userId={userId} />
      <div className="container ml-5">
      {children}
      </div>
    </div>
  );
};

export default layout;
