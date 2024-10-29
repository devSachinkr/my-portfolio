"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const useHero = () => {
  const cubeRef = useRef(null);
  const cube2Ref = useRef(null);
  const circleRef = useRef(null);
  const triangleRef = useRef(null);
  const typedRef = useRef(null);
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

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "<span>I am  <span className='text-[#a4f513]'>Sachin Kumar.</span></span>",
        "<span>A Backend Developer. </span>",
        "<span>A Frontend Developer. </span>",
        "<span>A Fullstack Developer. </span>",
      ],
      typeSpeed: 100,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return {
    cubeRef,
    cubeRotate,
    cube2Ref,
    cube2Translate,
    circleRef,
    circleTranslate,
    triangleTranslate,
    triangleRef,
    typedRef,
  };
};

export { useHero };
