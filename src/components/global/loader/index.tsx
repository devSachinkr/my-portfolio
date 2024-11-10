"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gif from "../../../../assets/ghost-loader.gif";
import Image from "next/image";
const Loader = () => {
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <motion.div
      initial={{ top: "0" }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen fixed left-0 top-0 flex items-center justify-center z-50 bg-black "
    >
      <Image src={gif.src} priority alt="ghost" width={65} height={65} />
    </motion.div>
  );
};

export default Loader;
