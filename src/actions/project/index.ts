"use server";

import { db } from "@/lib/db";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
import { Project } from "@prisma/client";
import { v4 } from "uuid";
const generateResponse = (
  status: number,
  message: string,
  data?:
    | PROJECT_WITH_TECH_STACK_AND_TAGS
    | null
    | []
    | PROJECT_WITH_TECH_STACK_AND_TAGS[0]
) => ({
  status,
  message,
  data: data || null,
});

export const upsertProject = async ({
  name,
  description,
  id,
  thumbnail,
  userId,
  tags,
  techStack,
  githubLink,
  hostedLink,
  hostedPlatform,
  projectCreatedAt,
}: Partial<Project> & {
  tags: { name: string }[];
  techStack: { name: string; description: string }[];
}) => {
  try {
    if (
      !name ||
      !description ||
      !id ||
      !thumbnail?.length ||
      !userId ||
      !tags.length ||
      !techStack.length ||
      !hostedLink ||
      !hostedPlatform
    ) {
      console.log("fields Missing 😠");
      return generateResponse(400, "Fields Missing", []);
    }

    const res = await db.project.upsert({
      where: { id: id || v4() },
      update: {
        name,
        description,
        thumbnail,
        githubLink,
        hostedLink,
        hostedPlatform,
        projectCreatedAt,
      },
      create: {
        id: v4(),
        name,
        description,
        thumbnail,
        userId,
        githubLink,
        hostedLink,
        hostedPlatform,
        projectCreatedAt,
        tags: {
          create: tags.map((tag) => ({
            id: v4(),
            name: tag?.name,
          })),
        },
        techStack: {
          create: techStack.map((tech) => ({
            id: v4(),
            name: tech?.name,
            description: tech?.description,
          })),
        },
      },
    });
    if (!res) {
      console.log(res);
      return generateResponse(404, "Failed to upsert project", null);
    }
    return generateResponse(200, "Project upSerted successfully", null);
  } catch (error) {
    console.error("upsertProject Error:", error);
    return generateResponse(500, "Failed to upsert project", null);
  }
};

export const getAllProject = async () => {
  try {
    const res = await db.project.findMany({
      include: {
        tags: true,
        techStack: true,
      },
    });
    if (!res.length) {
      return generateResponse(404, "There are no any  project exist", []);
    }
    return generateResponse(200, "Data fetched", res);
  } catch (error) {
    console.log(error);
    return generateResponse(500, "Internal server error", []);
  }
};

export const getProjectDetails = async ({
  projectId,
}: {
  projectId: string;
}) => {
  if (!projectId)
    return generateResponse(400, "Project ID must be provided", null);
  try {
    const res = await db.project.findUnique({
      where: { id: projectId },
      include: {
        tags: true,
        techStack: true,
      },
    });
    if (!res) return generateResponse(400, "Failed to fetch Project", null);
    return generateResponse(200, "Data fetched ", res);
  } catch (error) {
    console.log(error);
    return generateResponse(500, "Internal server error", null);
  }
};
