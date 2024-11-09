"use client";

import { useRouter } from "next/navigation";
import ProjectDetails from "@/components/projects/project-details";
import React from "react";
import Spinner from "@/components/global/spinner";
import { useProject } from "@/hooks/project";

type Props = {
  params: {
    projectId: string;
  };
};

const ProjectPage = ({ params: { projectId } }: Props) => {
  const router = useRouter();

  if (!projectId) {
    router.push("/");
  }

  const { projectDetails: data, isFetching, tagColors } = useProject(projectId);

  return (
    <Spinner
      loading={isFetching}
      loaderClasses="w-screen h-screen flex items-center justify-center"
    >
    <ProjectDetails data={data} tagColors={tagColors}/>
    </Spinner>
  );
};

export default ProjectPage;
