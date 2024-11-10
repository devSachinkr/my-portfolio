"use client";

import React from "react";
import PieChart from "./pie-chart";

type Props = {
  userId: string;
};

const DashboardItems = ({ userId }: Props) => {
  return (
    <div className="w-screen flex flex-col container mt-5">
      <div className=" w-full flex md:flex-row flex-col gap-5   items-center md:justify-start">
        <PieChart type="skills" userId={userId} />
        <PieChart type="projects" userId={userId} />
      </div>
    </div>
  );
};

export default DashboardItems;
