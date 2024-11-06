"use client";
import React from "react";
import {
  Tabs as ShadCnTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ExistingSkillContent from "./existing-skill-content";
import { usePathname } from "next/navigation";
import AddNewSkill from "./add-new-skill";
import ExistingProject from "./existing-project";
import AddProject from "./add-project";
type Props = {
  type: "skill" | "project";
};

const Tabs = ({ type }: Props) => {
  const pathName = usePathname();
  const userId = pathName.split("/")[3];
  switch (type) {
    case "skill": {
      return (
        <ShadCnTabs defaultValue={"existing-skill"} className="w-fit mx-auto">
          <TabsList>
            <TabsTrigger value="existing-skill">Existing Skill</TabsTrigger>
            <TabsTrigger value="new-skill">Add Skill</TabsTrigger>
          </TabsList>
          <TabsContent value="existing-skill" className="w-[80vw]">
            <ExistingSkillContent userId={userId} />
          </TabsContent>
          <TabsContent value="new-skill" className=" w-[80vw]">
            <AddNewSkill userId={userId} />
          </TabsContent>
        </ShadCnTabs>
      );
    }

    case "project": {
      return (
        <ShadCnTabs defaultValue={"existing-project"} className="w-fit mx-auto">
          <TabsList>
            <TabsTrigger value="existing-project">Existing Project</TabsTrigger>
            <TabsTrigger value="new-project">Add Project</TabsTrigger>
          </TabsList>
          <TabsContent value="existing-project" className="w-[80vw]">
            <ExistingProject />
          </TabsContent>
          <TabsContent value="new-project" className="w-[80vw]">
            <AddProject />
          </TabsContent>
        </ShadCnTabs>
      );
    }
  }
};

export default Tabs;
