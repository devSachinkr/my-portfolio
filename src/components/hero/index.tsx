"use client";
import Image from "next/image";
import React from "react";
import cube from "../../../assets/cube.png";
import HexagonSvg from "../global/svg/hexagon-svg";
import cube2 from "../../../assets/cube2.png";
import triangle from "../../../assets/triangle.png";
import circle from "../../../assets/circle.png";
import Circle from "./circle";
import { motion } from "framer-motion";
import { useHero } from "@/hooks/hero";
const Hero = () => {
  const {
    cubeRef,
    cubeRotate,
    cube2Ref,
    cube2Translate,
    circleRef,
    circleTranslate,
    triangleTranslate,
    triangleRef,
    typedRef,
  } = useHero();

  return (
    <div className="container w-screen  flex flex-col  items-center lg:items-start select-none overflow-y-clip overflow-x-hidden h-[101rem]  ">
      <div className="w-full z-50 flex ">
        <div className=" w-screen h-screen flex  items-center justify-center">
          <div className=" w-screen flex flex-col align-middle pl-16 ">
            <div>
              <h1 className="text-[3rem] font-semibold ">Hi, 👋</h1>
              <h2
                className="text-[3rem] font-semibold  h-[5vh] "
                ref={typedRef}
              ></h2>
              <p className="text-muted-foreground capitalize mt-6">
                a passionate software developer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full -z-10 ">
        <div className="inline-flex mt-24 relative z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonSvg
              prop={{
                className: "size-[900px] lg:size-[1100px]",
                size: 1500,
                duration: 30,
              }}
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonSvg
              prop={{
                className: "size-[1100px] lg:size-[1800px]",
                reverse: true,
              }}
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle animate className="absolute left-[138px] lg:-top-[758px] ">
              <motion.img
                style={{ rotate: cube2Translate }}
                src={cube2.src}
                alt="hlo"
                className="size-[140px]"
                ref={cube2Ref}
              />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle animate className="absolute  left-[62px] top-[180px]">
              <motion.img
                src={triangle.src}
                alt="hlo"
                className="size-[140px]"
                ref={triangleRef}
                style={{ rotate: triangleTranslate }}
              />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[500px] -top-[80px]  ">
              <motion.img
                style={{ rotate: circleTranslate }}
                src={circle.src}
                alt="circle"
                className="size-[140px]"
                ref={circleRef}
              />
            </Circle>
          </div>
          <motion.div
            className="inline-flex"
            style={{
              rotate: cubeRotate,
            }}
            ref={cubeRef}
          >
            <Image
              src={cube}
              alt="hero-banner"
              width={400}
              height={300}
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[1%] hue-rotate-[240deg]"
            />
            <Image src={cube} alt="hero-banner" width={300} height={300} />
          </motion.div>
        </div>
      </div>

      {/* Mouse  */}
      <div
        className="flex w-full flex-col items-center mt-32 
      md:mt-96 gap-4 z-50"
      >
        <div className="h-10 w-5 outline outline-[6px] outline-purple-900 inline-flex justify-center pt-2 rounded-full">
          <motion.div
            animate={{
              translateY: 12,
              opacity: 0.2,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="h-3 w-1 bg-lime-500 rounded-full "
          />
        </div>
        <p className=" tracking-wider uppercase text-zinc-500 font-extrabold">
          Scroll to learn more
        </p>
      </div>
     
    </div>
  );
};

export default Hero;
