import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="w-screen h-[10vh]">
      <section className=" container p-5 flex md:flex-row flex-col items-center justify-between">
        <div className="flex items-center justify-start">
          <Link
            href="https://github.com/devSachinkr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 flex items-center justify-center gap-2 hover:text-muted-foreground  transition-all duration-300"
          >
            <FaGithub />
            Github
          </Link>
          <Link
            href="https://www.instagram.com/sachin_65400/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 flex items-center justify-center gap-2 hover:text-muted-foreground transition-all duration-300"
          >
            <FaInstagram />
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/sachin-kumar67/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 flex items-center justify-center gap-2 hover:text-muted-foreground transition-all duration-300"
          >
            <FaLinkedin />
            LinkedIn{" "}
          </Link>
        </div>
        <div className="flex items-center p-2 gap-2">
          <BiLogoGmail />
          <span className=" font-semibold">sachin67.dev@gmail.com</span>
        </div>
        <p className="text-muted-foreground">
          �� 2024 My Portfolio. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
