import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";

type Props = {
  data: PROJECT_WITH_TECH_STACK_AND_TAGS[0];
  totalLength: number;
  currentIdx: number;
  thumbnail: string;
};

const ProjectCard = ({
  // WIP:: Here you get ID for delete the project
  data: { id, name, description: desc },
  currentIdx,
  totalLength,
  thumbnail,
}: Props) => {
  return (
    <Card className="h-[350px] w-[250px] rounded-lg">
      <CardContent>
        <div className="w-full flex flex-col items-center justify-center  relative">
          <div className="w-6 h-6 rounded-full aspect-square bg-gradient-to-l from-purple-600 to-fuchsia-600 absolute top-2 left-[10px] text-sm font-semibold flex items-center justify-center text-washed-blue-50">
            {currentIdx + 1}/{totalLength}
          </div>
          <Link href={`/site/project/${id}`}>
            <Image
              key={currentIdx}
              src={thumbnail}
              alt={name}
              width={250}
              height={220}
              className="h-[220px]"
            />

            <p className="text-lg font-semibold flex mt-2 justify-center">
              {name}
            </p>
            <p className="text-sm font-semibold text-muted-foreground container mt-3">
              {desc.length > 15 ? desc.slice(0, 15).concat("...") : desc}
            </p>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
