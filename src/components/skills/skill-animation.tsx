import React from "react";
import Orbit from "../global/orbit";
import DysonSphere from "../../../assets/dysonSphere.png";
import Image from "next/image";
import SkillCard from "./skill-card";
import { SKILL_ANIMATE } from "@/lib/constants";
const SkillAnimation = () => {
  return (
    <div className=" w-full h-[60vh] justify-center  mb-10 flex gap-3  p-10">
      <div className=" h-fit  relative">
        <Orbit className=" w-[270px] h-[270px] flex items-center justify-center">
          <Orbit className=" w-[180px] h-[180px] flex items-center justify-center ">
            <Image
              src={DysonSphere}
              width={70}
              height={70}
              alt="Dyson Sphere"
            />
          </Orbit>
        </Orbit>

        {SKILL_ANIMATE.map(({ alt, iconName, rotate }) => (
          <div
            className=" inset-0 absolute rotate-0"
            style={{
              transform: `rotate(${rotate}deg)`,
            }}
            key={alt}
          >
            <SkillCard
              href={iconName}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0"
              style={{
                transform: ` translate(-50% , -50%) rotate(-${rotate}deg)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillAnimation;
