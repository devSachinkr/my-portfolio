"use client";
import Sidebar  from "@/components/dashboard/sidebar";
import React from "react";

type Props = {
  params: {
    userId: string;
  };
};

const page = ({ params: { userId } }: Props) => {
  return (
    <div>
      {/* <Navbar /> */}
    </div>
  );
};

export default page;
