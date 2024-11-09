import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character long" })
    .max(255, { message: "Name must be at least 255 characters long" }),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  number: z.string().optional(),
});

export const AuthFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character long" })
    .max(255, { message: "Name must be at least 255 characters long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(255, { message: "Password must be at least 255 characters long" }),
  otp: z.string().min(1, { message: "OTP is required" }),
});

export const AddSkillSchema = z.object({
  name: z.string().min(1, { message: "Skill name is required" }).max(250, {
    message: "Skills name must be shorter than 250 characters",
  }),
});

export const ProjectFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be greater than 3 character" })
    .max(255, { message: "Name must be shorter than 255 character " }),

  description: z
    .string()
    .min(16, { message: "Name must be greater than 16 character" })
    .max(555, { message: "Name must be shorter than 555 character " }),

  hostedLink: z.string().min(1, { message: "Hosted link is required" }),

  githubLink: z.string().min(1, { message: "Hosted link is required" }),
  projectCreatedAt: z.string().optional().default(""),
  hostedPlatform: z.string().min(1, { message: "Hosted link is required" }),
});
