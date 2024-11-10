"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useModal } from "@/provider/modal";
import Dialog from "../global/dialog";
import { useProject } from "@/hooks/project";
import { useAuthUser } from "@/provider/auth";

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
  const { token, user } = useAuthUser();
  const { deleteProject } = useProject();
  const { setOpen, setClose } = useModal();
  return (
    <Card className="h-[350px] w-[250px] rounded-lg">
      <CardContent>
        <div className="w-full flex flex-col items-center justify-center  relative">
          {token.length && user && (
            <div className="absolute top-2 right-4 p-1 border rounded-full hover:bg-accent ">
              <Popover>
                <PopoverTrigger>
                  <EllipsisVertical size={25} />
                </PopoverTrigger>
                <PopoverContent className=" flex items-center flex-col gap-3 justify-center w-28">
                  <Button
                    className="w-16 hover:bg-purple-600/60 bg-transparent border-[1px] border-purple-600 cursor-pointer"
                    onClick={() =>
                      setOpen(
                        <Dialog
                          dialogContent={
                            <div className="flex items-center justify-end gap-3">
                              <Button
                                className="hover:bg-accent bg-transparent border-purple-600 border-[1px]"
                                onClick={() => setClose()}
                              >
                                Cancel
                              </Button>
                              <Button
                                className="hover:bg-purple-600 bg-transparent border-purple-600 border-[1px]"
                                onClick={() => deleteProject(id)}
                              >
                                Delete
                              </Button>
                            </div>
                          }
                        />
                      )
                    }
                  >
                    Delete
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          )}
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
