import GradientText from "@/components/global/GradientText";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
import { Link2, Star } from "lucide-react";

import { useProject } from "@/hooks/project";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TechStackView from "./tech-stack-view";
import ThumbnailSlider from "./thumbnail-slider";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
type Props = {
  data: PROJECT_WITH_TECH_STACK_AND_TAGS[0] | null;
  tagColors: string[];
};

const ProjectDetails = ({ data, tagColors }: Props) => {
  const { nextThumbnail, thumbnail } = useProject("", data);
  return (
    <div>
      {data && (
        <div className=" flex flex-col m-20 gap-4 items-center md:items-stretch justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center  gap-4">
            <div className="md:w-[50%] w-[90vw] bg-card rounded-xl  overflow-hidden p-5  flex flex-col items-start justify-center  select-none relative">
              <div className="w-40  p-3  flex flex-col items-start justify-center  gap-2 absolute right-0 top-0 capitalize font-bold">
                <div className="flex gap-3 bg-gradient-to-tr from-purple-600 to-slate-600 p-2 rounded-tr-xl">
                  <Star fill="#FFFF00" className="text-black" size={25} />
                  {data.name}
                </div>
                <Link
                  href={data.githubLink || "https://github.com/devSachinkr/"}
                  target="_blank"
                  className="flex gap-3 items-center"
                >
                  <FaGithub size={30} />
                  Github
                </Link>
                <Link
                  target="_blank"
                  href={data.hostedLink || "https://github.com/devSachinkr/"}
                  className="flex gap-3 items-center"
                >
                  <Link2 size={30} /> Live
                </Link>
              </div>

              <div className=" min-w-28 h-32 absolute  bg-gradient-to-bl  from-purple-600 via-lime-800 to-blue-600 blur-[100px]  " />
              <ThumbnailSlider data={data} thumbnail={thumbnail} />
              <div className="w-52  px-2  flex items-center   gap-2 capitalize font-bold opacity-80">
                Hosted At:-{" "}
                <span className="italic">{data.hostedPlatform}</span>
              </div>
              <div className="text-purple-600 opacity-35">
                Double click on Preview to View Full Image
              </div>
              <div className="flex items-center justify-start p-5 h-40 rounded-xl mt-3 gap-3 overflow-x-scroll your-scrollable-container w-full   relative">
                <div className=" min-w-28 h-32 absolute left-0 bg-gradient-to-bl  from-purple-600 via-lime-800 to-blue-600 blur-[100px]  " />
                {data?.thumbnail.map((t) => (
                  <div
                    key={t}
                    className={cn(
                      "  min-w-[200px]  h-full flex flex-col items-center border justify-center rounded-xl overflow-hidden ",
                      t === thumbnail && "border-purple-700 border-dashed"
                    )}
                  >
                    <Image
                      onClick={() => nextThumbnail(t)}
                      src={t}
                      alt="Thumbnail"
                      width={150}
                      height={150}
                      className="cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-[50%] w-[90vw] min-h-[450px] max-h-[450px] rounded-xl bg-card flex flex-col items-center justify-start p-5 text-center gap-5 overflow-y-scroll your-scrollable-container ">
              <h1 className="flex items-center justify-center w-full text-6xl font-semibold">
                <GradientText
                  className="from-gray-800 via-gray-300 to-gray-800 "
                  classes="md:text-[5rem] text-[3rem]  font-semibold "
                >
                  Description
                </GradientText>
              </h1>



              <p className="text-gray-500/70">{data.description}</p>
            </div>
          </div>

          <div className="bg-card rounded-xl w-[90vw]">
            <h1 className="flex items-center justify-center w-full text-6xl font-semibold mt-8 gap-3">
              <GradientText
                className="from-gray-800 via-gray-300 to-gray-800 "
                classes="md:text-[4.2rem] text-[3rem]  font-semibold "
              >
                Technologies Used
              </GradientText>
            {
                <div className="mt-3 gap-3 flex items-center">
                  {data.tags.map((tag, index) => (
                    <span
                      key={tag.id}
                      className="px-4 py-3 border-[1px] rounded-xl hover:bg-accent cursor-pointer text-lg"
                      style={{
                        borderColor: tagColors[index],
                      }}
                    >
                      {tag.name.toUpperCase()}
                    </span>
                  ))}
                </div>
              }
            </h1>
            <TechStackView data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
