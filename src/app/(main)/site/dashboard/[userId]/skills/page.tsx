import GradientText from "@/components/global/GradientText";
import React from "react";
import Tabs from "./_components/skill-tab";

const page = () => {
  return (
    <div className="flex w-screen h-screen flex-col p-5">
      <h1 className="flex items-center justify-start w-full  font-semibold">
        <GradientText
          className="from-purple-800 via-fuchsia-500 to-purple-800 "
          classes=" text-5xl md:text-[4rem]  font-semibold"
        >
          Skills
        </GradientText>
      </h1>

      <div className=" flex items-center justify-center w-full mt-10">
        <Tabs type="skill" />
      </div>
    </div>
  );
};

export default page;
