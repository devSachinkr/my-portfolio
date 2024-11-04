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
    <div className="flex">
      <Sidebar userId={userId} />
      {children}
    </div>
  );
};

export default layout;
