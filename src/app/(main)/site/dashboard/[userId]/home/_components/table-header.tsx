import { TableHead as ShadCnTableHead } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

type Props = { type: "skills" | "projects"; className?: string };

const TableHead = ({ type, className }: Props) => {
  const tableHead: {
    label: string;
  }[] = [];
  const generateHeader = () => {
    return type === "skills"
      ? tableHead.push(
          {
            label: "Skill Name",
          },
          { label: "Icon" }
        )
      : tableHead.push(
          {
            label: "Project Name",
          },
          {
            label: "Stack",
          },
          {
            label: "Github Link",
          },
          {
            label: "Live Demo Link",
          },
          {
            label: "Hosted On",
          }
        );
  };
  generateHeader();
  return tableHead.map((head, index) => (
    <ShadCnTableHead key={index} className={cn(className)}>
      {head.label}
    </ShadCnTableHead>
  ));
};

export default TableHead;
