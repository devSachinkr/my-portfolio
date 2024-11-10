import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import TableHead from "./table-header";
import TableRowBody from "./table-row-body";

type Props = {
  userId: string;
  type: "skills" | "projects";
};

const DashboardTable = ({ userId, type }: Props) => {
  return (
    <div className="flex w-full  justify-center md:justify-start mt-5 container">
      <Table>
        <TableCaption>
          A list of data of {type === "skills" ? "Skills" : "Projects"}
        </TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead className=" text-white font-semibold " type={type} />
          </TableRow>
        </TableHeader>
        <TableBody>
           <TableRowBody className="p-5" userId={userId} type={type} />
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
