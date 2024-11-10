"use client";
import GradientText from "@/components/global/GradientText";
import React from "react";
import DashboardItems from "./_components/dashboard-items";
import DashboardTable from "./_components/dashboard-table";

type Props = {
  params: {
    userId: string;
  };
};
const page = ({ params: { userId } }: Props) => {
  return (
    <div className="flex w-screen h-screen flex-col p-5 overflow-x-hidden">
      <h1 className="flex items-center justify-start w-full  font-semibold">
        <GradientText
          className="from-purple-800 via-fuchsia-500 to-purple-800 "
          classes=" text-5xl md:text-[4rem]  font-semibold"
        >
          Dashboard
        </GradientText>
      </h1>

      <DashboardItems userId={userId} />
      <div className="flex w-full gap-3 flex-col md:flex-row mt-7">
        <article className="md:w-[50%]">
          <p className="flex items-center justify-center w-full  font-semibold">
            <GradientText
              className="from-purple-800 via-fuchsia-500 to-purple-800 "
              classes=" text-2xl md:text-[2rem]  font-semibold"
            >
              Skills
            </GradientText>
          </p>
          <DashboardTable type="skills" userId={userId} />
        </article>
        <article className="md:w-[50%]">
        <p className="flex items-center justify-center w-full  font-semibold">
            <GradientText
              className="from-purple-800 via-fuchsia-500 to-purple-800 "
              classes=" text-2xl md:text-[2rem]  font-semibold"
            >
              Projects
            </GradientText>
          </p>
          <DashboardTable type="projects" userId={userId} />
        </article>
      </div>
    </div>
  );
};

export default page;
