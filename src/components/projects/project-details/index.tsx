import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
import React from "react";
import GradientText from "@/components/global/GradientText";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "@/components/global/tooltip";
import { Link2 } from "lucide-react";
import Link from "next/link";
import TechStack from "./tech-stack";
import ImagesGrid from "./images-grid";
type Props = {
  data: PROJECT_WITH_TECH_STACK_AND_TAGS[0] | null;
  tagColors: string[];
};

const ProjectDetails = ({ data, tagColors }: Props) => {
  return (
    <div>
      {data && (
        <div className="flex pt-20 container">
          <div className="flex flex-col md:flex-row gap-3  w-screen p-5  rounded-xl">
            <article className="md:w-[50%]  h-full flex flex-col items-start justify-start container">
              {/* Header */}
              <div className="flex items-center justify-between w-full h-[10rem]">
                <div>
                  <h1>
                    <GradientText
                      className="w-full from-primary-purple-600 to-purple-800"
                      classes="text-5xl font-semibold"
                    >
                      {data.name}.
                    </GradientText>
                  </h1>
                  <div className="">
                    <p className="text-sm font-semibold">{data.description}</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center">
                  <div className="flex items-center justify-center gap-3">
                    <Link href={`${data.githubLink!}`} target="_blank">
                      <FaGithub size={35} />
                    </Link>
                    <Link href={`${data.hostedLink!}`} target="_blank">
                      <Tooltip
                        tooltipTrigger={<Link2 size={35} />}
                        tooltipContent={"Live Link"}
                      />
                    </Link>
                  </div>
                  <div className="mt-5 font-semibold ">
                    Hosted At :-{"  "}
                    {data.hostedPlatform}
                  </div>
                </div>
              </div>
              {/* Tags */}
              <div className="mt-5">
                <GradientText
                  className="w-full from-primary-purple-600 to-purple-800"
                  classes="text-2xl font-semibold"
                >
                  Stack Used.
                </GradientText>

                <div className="mt-3 gap-3 flex items-center">
                  {data.tags.map((tag, index) => (
                    <span
                      key={tag.id}
                      className="px-4 py-3 border-[1px] rounded-xl hover:bg-accent cursor-pointer"
                      style={{
                        borderColor: tagColors[index],
                      }}
                    >
                      {tag.name.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
              {/* Tech Stack */}
              <div className="mt-5">
                <GradientText
                  className="w-full from-primary-purple-600 to-purple-800"
                  classes="text-2xl font-semibold"
                >
                  Technologies Used.
                </GradientText>
              </div>
              <div>
                <TechStack data={data.techStack} />
              </div>
            </article>
            <article className="md:w-[50%] h-full  container">
            <GradientText
                  className="w-full from-primary-purple-600 to-purple-800"
                  classes="text-3xl font-semibold"
                >
                  Images.
                </GradientText>
              <ImagesGrid data={data.thumbnail} />
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
