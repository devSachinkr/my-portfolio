"use client";
import {
  addSkill,
  deleteSkill,
  getSkill,
  getSkillWithoutId,
} from "@/actions/skills";
import ToastNotify from "@/components/global/toast";
import { AddSkillSchema } from "@/lib/schema";

import { Skill } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const useSkills = ({ userId }: { userId?: string }) => {
  const router = useRouter();
  const [existingSkillData, setExistingSkillData] = useState<Skill[]>([]);

  const [allSkillData, setAllSkillData] = useState<Skill[]>([]);

  const getSkillData = async () => {
    const res = await getSkill({ userId: userId as string });
    if (res.status === 200) {
      setExistingSkillData(res.data as Skill[]);
      return;
    }
    setExistingSkillData([]);
  };

  const getAllSkill = async () => {
    const res = await getSkillWithoutId();
    if (res.status !== 200) {
      setAllSkillData([]);
    }
    setAllSkillData(res.data as Skill[]);
  };

  const deleteSkillData = async ({ skillId }: { skillId: string }) => {
    if (!skillId)
      return ToastNotify({
        title: "Oops!",
        msg: "Skill not found",
      });
    const res = await deleteSkill({ skillId });
    if (res.status !== 200) {
      return ToastNotify({
        title: "Oops!",
        msg: res.message,
      });
    }
    if (res.status == 200) {
      router.refresh();
      return ToastNotify({
        title: "Success",
        msg: res.message,
      });
    }
  };
  useEffect(() => {
    if (userId) getSkillData();
    getAllSkill();
  }, [userId]);

  return { existingSkillData, allSkillData, deleteSkillData };
};

const useSkillForm = ({ userId }: { userId: string }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof AddSkillSchema>>({
    mode: "onChange",
    resolver: zodResolver(AddSkillSchema),
    defaultValues: {
      name: "",
    },
  });

  const addSkillData = form.handleSubmit(async ({ name }) => {
    const res = await addSkill({ userId, name });
    if (res.status !== 200) {
      ToastNotify({
        title: "Oops!",
        msg: res.message!,
      });
    }
    ToastNotify({
      title: "Success",
      msg: res.message!,
    });
    form.reset();
    router.refresh();
  });
  return { form, addSkillData };
};

export { useSkills, useSkillForm };
