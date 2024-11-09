import { Project, Tags, TechStack } from "@prisma/client";

export type PROJECT_WITH_TECH_STACK_AND_TAGS = (Project & {
  tags: Tags[];
  techStack: TechStack[];
})[];
