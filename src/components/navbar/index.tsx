"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import logo from "../../../assets/boy.png";
import { Menu, X } from "lucide-react";
import { useNavbar } from "@/hooks/navbar";
import { Button } from "../ui/button";
import Link from "next/link";
import { MenuLink } from "@/lib/constants";
import { useAuthUser } from "@/provider/auth";
const Navbar = () => {
  const { isMenuActive, setIsMenuActive } = useNavbar();
  const { user } = useAuthUser();
  return (
    <div className="w-screen container h-14 fixed top-0 z-[99999] bg-transparent flex items-center justify-between">
      {/* Left */}
      <div className="items-center h-full flex gap-2">
        <Avatar>
          <AvatarImage src={logo.src} alt="logo" />
          <AvatarFallback>BOY</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-lg">My Portfolio</p>
      </div>
      {/* Middle */}
      <div className="hidden md:flex items-center font-semibold ">
        <ul className="flex gap-3">
          {MenuLink.map((ele, idx) => (
            <li
              key={idx}
              className=" text-white hover:text-purple-600 transition-all duration-400 "
            >
              <Link href={ele.href} className="flex items-center gap-2">
                {<ele.icon />} {ele.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Right */}
      <div className=" flex items-center gap-3 md:pr-7">
        <Avatar>
          <AvatarImage src={logo.src} alt="logo" />
          <AvatarFallback>BOY</AvatarFallback>
        </Avatar>
        <Link href={user ? `/site/dashboard/${user.id}` : "/login"}>
          <Button
            className="border-[2px] border-purple-700 bg-transparent text-white hover:bg-accent"
            variant={"outline"}
          >
            {user ? "Dashboard" : "Login"}
          </Button>
        </Link>

        <span className=" block md:hidden cursor-pointer">
          {isMenuActive ? (
            <X onClick={() => setIsMenuActive((prev) => !prev)} />
          ) : (
            <Menu onClick={() => setIsMenuActive((prev) => !prev)} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
