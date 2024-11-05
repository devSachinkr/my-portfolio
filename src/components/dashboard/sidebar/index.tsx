"use client";
import { Tooltip } from "@/components/global/tooltip";
import { useSidebar } from "@/hooks/sidebar";
import { DASHBOARD_NAV_LINK } from "@/lib/constants";
import clsx from "clsx";
import { CirclePower } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  userId: string;
};
const Sidebar = ({ userId }: Props) => {
  const pathName = usePathname();
  const { toggleSidebar, setToggleSidebar } = useSidebar();
  return (
    <article
      className={clsx(
        " h-screen border-r-[1px] border-accent rounded-r-md transition-all duration-300 overflow-hidden",
        toggleSidebar ? "w-48" : "w-16"
      )}
    >
      <div className=" h-10 z-50 flex items-center   justify-center pt-5">
        <CirclePower
          onClick={() => setToggleSidebar((prev) => !prev)}
          className={clsx(
            " transition-all duration-300 cursor-pointer",
            toggleSidebar
              ? "text-yellow-500 hover:text-gray-400"
              : "text-gray-400 hover:text-yellow-500"
          )}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-evenly h-[50vh]">
        {DASHBOARD_NAV_LINK.map((link) => (
          <Link
            href={`/site/dashboard/${userId}${link.path}`}
            key={link.name}
            className={clsx(
              "flex items-center p-2 justify-center rounded-full cursor-pointer transition-all duration-200 gap-2",
              pathName.includes(link.path)
                ? "bg-purple-800 hover:bg-purple-800/40 "
                : "bg-accent hover:bg-accent/40",
              !toggleSidebar ? "" : "w-28"
            )}
          >
            <Tooltip
              tooltipTrigger={<link.icon />}
              tooltipContent={link.name}
              showContent={!toggleSidebar}
            />
            {toggleSidebar && <p>{link.name}</p>}
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Sidebar;
