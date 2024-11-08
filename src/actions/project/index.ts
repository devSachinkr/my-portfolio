"use server";

import { db } from "@/lib/db";
import { Project, Tags, TechStack } from "@prisma/client";
import { v4 } from "uuid";
const generateResponse = (
  status: number,
  message: string,
  data?:
    | Partial<
        Project & {
          tags: Tags[];
          techStack: TechStack[];
        }
      >
    | null
    | []
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
}: Partial<Project> & {
  tags: { name: string }[];
  techStack: { name: string; description: string }[];
}) => {
  console.log(
    "name : ",
    name,
    "desc : ",
    description,
    "id : ",
    id,
    "thumbnail :",
    thumbnail,
    "userID : ",
    userId,
    "tags : ",
    tags,
    "techStack : ",
    techStack
  );
  try {
    if (
      !name ||
      !description ||
      !id ||
      !thumbnail?.length ||
      !userId ||
      !tags.length ||
      !techStack.length
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
      },
      create: {
        id: v4(),
        name,
        description,
        thumbnail,
        userId,
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
