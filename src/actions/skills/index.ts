"use server";

import { db } from "@/lib/db";
import { Project, Skill } from "@prisma/client";
import { v4 } from "uuid";

const generateResponse = (
  status: number,
  message: string,
  data?: Skill[] | Project | null
) => ({
  status,
  message,
  data: data || null,
});

export const getSkill = async ({ userId }: { userId: string }) => {
  if (!userId) {
    return generateResponse(404, "User ID must be provided", null);
  }
  try {
    const res = await db.skill.findMany({
      where: {
        userId,
      },
    });
    if (!res) {
      return generateResponse(404, "No data found", []);
    }
    return generateResponse(200, "Skill  successfully fetched", res);
  } catch (error) {
    console.error("getSkill Error:", error);
    return generateResponse(500, "Failed to fetch skill", null);
  }
};

export const addSkill = async ({ userId, name }: Partial<Skill>) => {
  if (!userId || !name) {
    return generateResponse(404, "User ID must be provided", null);
  }

  try {
    const res = await db.skill.create({
      data: {
        name,
        id: v4(),
        userId,
      },
    });
    if (!res) {
      return generateResponse(404, "Failed to add skill", null);
    }
    return generateResponse(200, "Skill  Added", null);
  } catch (error) {
    console.error("getSkill Error:", error);
    return generateResponse(500, "Failed to Add skill", null);
  }
};

export const getSkillWithoutId = async () => {
  try {
    const res = await db.skill.findMany({});
    if (!res) {
      return generateResponse(404, "No data found", []);
    }
    return generateResponse(200, "Skill  successfully fetched", res);
  } catch (error) {
    console.error("getSkill Error:", error);
    return generateResponse(500, "Failed to fetch skill", null);
  }
};

export const deleteSkill = async ({ skillId }: { skillId: string }) => {
  if (!skillId) throw new Error("Skill ID must be provided");
  try {
    const res = await db.skill.delete({
      where: {
        id: skillId,
      },
    });

    if (!res) {
      return generateResponse(400, "Skill not deleted", null);
    }
    return generateResponse(200, "Skill deleted");
  } catch (error) {
    console.log(error);
    return generateResponse(500, "Internal server Errro");
  }
};
