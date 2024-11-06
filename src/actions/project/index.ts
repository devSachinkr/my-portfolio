"use server";

import { db } from "@/lib/db";
import { Prisma, Project, Tags, TechStack } from "@prisma/client";
import { v4 } from "uuid";
const generateResponse = (
  status: number,
  message: string,
  data?: Partial<Project&{
    tags:Tags[],
    techStack:TechStack[]
}>| null
) => ({
  status,
  message,
  data: data || null,
});
export const createProject = async ({
    description,
    name,
    tags,
    techStack,
    thumbnail,
    userId,
  }: Partial<Project&{
      tags:Tags[],
      techStack:TechStack[]
  }>) => {
    // Input validation
    if (!name || !tags || !thumbnail || !userId || !techStack || !description) {
      return generateResponse(404, "All fields are required", null);
    }
  
    try {
      
      const res = await db.project.create({
        data: {
          id: v4(),
          description,
          name,
          user: { connect: { id: userId } }, // Connect the existing user by userId
          thumbnail,
          techStack: {
            create: techStack.map((tech) => ({
              name: tech.name,
              description: tech.description,
            })),
          },
          tags: {
            create: tags.map((tag) => ({
              name: tag.name,
            })),
          },
        } as unknown as Prisma.ProjectCreateInput, 
      });
  
      
      if (!res) {
        return generateResponse(400, "Failed to create project", null);
      }
      return generateResponse(200, "Project created successfully", res);
    } catch (error) {
      console.error("createProject Error:", error);
      return generateResponse(500, "Failed to create project", null);
    }
  };





// export const createTag=async({name,projectId}:Partial<Tags>)=>{

// }
