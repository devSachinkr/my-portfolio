"use client";
import Spinner from "@/components/global/spinner";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useProject } from "@/hooks/project";
import { useSkills } from "@/hooks/skills";
import React from "react";
import { Pie, PieChart as ShadcnPie } from "recharts";
type Props = {
  type: "skills" | "projects";
  userId: string;
};

const PieChart = ({ type, userId }: Props) => {
  const { allProjectDetails, generateRandomColor, loading } = useProject();
  const { allSkillData } = useSkills({ userId });
  const chartData: { name: string; value: number; fill: string }[] = [];
  const chartConfig: ChartConfig = {} satisfies ChartConfig;

  switch (type) {
    case "skills":
      {
        allSkillData?.map((skillData) =>
          chartData.push({
            name: skillData.name,
            value: allSkillData.length,
            fill: `${generateRandomColor()}`,
          })
        );

        allSkillData?.map(
          (skill) =>
            (chartConfig[skill.name] = {
              label: skill.name,
              color: `${generateRandomColor()}`,
            })
        );
      }
      break;
    case "projects":
      {
        allProjectDetails?.map((projectData) =>
          chartData.push({
            name: projectData.name,
            value: allSkillData.length,
            fill: `${generateRandomColor()}`,
          })
        );

        allProjectDetails?.map(
          (project) =>
            (chartConfig[project.name] = {
              label: project.name,
              color: `${generateRandomColor()}`,
            })
        );
      }
      break;
  }

  return (
    <Card className="w-72 h-[9rem]  bg-transparent">
      <Spinner
        loading={loading}
        loaderClasses="flex w-full h-full items-center justify-center"
      >
        <CardContent className="w-72 flex h-full">
          <article className="w-[50%] flex items-center  ">
            <span className=" pl-3 font-semibold text-[1.3rem]">
              Total{" "}
              {type === "skills"
                ? `Skills ${allSkillData.length | 0}`
                : `Projects ${allProjectDetails.length || 0}`}
            </span>
          </article>
          <article className="w-[50%] h-full flex items-center justify-center">
            {
              <ChartContainer
                config={chartConfig}
                className=" aspect-square h-[150px]"
              >
                <ShadcnPie className="z-50">
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    stroke="0"
                  />
                </ShadcnPie>
              </ChartContainer>
            }
          </article>
        </CardContent>
      </Spinner>
    </Card>
  );
};

export default PieChart;
