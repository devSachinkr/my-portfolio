"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { useProject } from "@/hooks/project";
import { useSkills } from "@/hooks/skills";
import { getIconURLByName } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {
  type: "skills" | "projects";
  className?: string;
  userId: string;
};

const TableRowBody = ({ type, className, userId }: Props) => {
  const { allProjectDetails } = useProject();
  const { allSkillData } = useSkills({ userId });
  const bodyData: {
    label: string;
    icon?: string;
    stack?: string;
    githubLink?: string | null;
    liveLink?: string;
    hostedOn?: string;
  }[] = [];
  switch (type) {
    case "skills":
      {
        allSkillData.map((s) =>
          bodyData.push({
            label: s.name,
            icon: s.name.toLowerCase(),
          })
        );
      }
      break;
    case "projects":
      {
        allProjectDetails.map((p) =>
          bodyData.push({
            label: p.name,
            stack: p.tags[0].name.toUpperCase(),
            githubLink: p.githubLink,
            liveLink: p.hostedLink,
            hostedOn: p.hostedPlatform,
          })
        );
      }
      break;
  }

  return bodyData.map((data) => (
    <TableRow key={data.label} className={cn(className)}>
      <TableCell>{data.label}</TableCell>
      {type === "skills" ? (
        <TableCell>
          <Avatar>
            <AvatarImage
              src={getIconURLByName(data.icon || "default")}
              alt={data.label}
            />
            <AvatarFallback>{data.icon?.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </TableCell>
      ) : (
        <>
          <TableCell>{data.stack}</TableCell>
          <TableCell>
            <Link
              href={data.githubLink!}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} />
            </Link>
          </TableCell>
          <TableCell>
            <Link
              href={data.liveLink!}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 size={25} />
            </Link>
          </TableCell>
          <TableCell>{data.hostedOn}</TableCell>
        </>
      )}
    </TableRow>
  ));
};

export default TableRowBody;
