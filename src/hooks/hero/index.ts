"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useHero = () => {
  const cubeRef = useRef(null);
  const cube2Ref = useRef(null);
  const circleRef = useRef(null);
  const triangleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const cubeRotate = useTransform(scrollYProgress, [0, 1], [10, -90]);
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cube2Ref,
    offset: ["start end", "end start"],
  });
  const cube2Translate = useTransform(cubeScrollYProgress, [0, 1], [0, 100]);

  const { scrollYProgress: circleScrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "end start"],
  });
  const circleTranslate = useTransform(
    circleScrollYProgress,
    [0, 1],
    [-100, -500]
  );
  const { scrollYProgress: triangleScrollYProgress } = useScroll({
    target: triangleRef,
    offset: ["start end", "end start"],
  });
  const triangleTranslate = useTransform(
    triangleScrollYProgress,
    [0, 1],
    [20, 100]
  );
  return { cubeRef, cubeRotate, cube2Ref, cube2Translate, circleRef ,circleTranslate,triangleTranslate,triangleRef};
};

export { useHero };
