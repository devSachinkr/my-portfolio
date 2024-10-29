"use client";
import Loader from "@/components/global/loader";
import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
const page = () => {
  return (
    <div className="h-screen w-screen">
      <Loader />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <section>
          <Navbar />
          <Hero />
          <Skills />
        </section>
      </motion.div>
    </div>
  );
};

export default page;
