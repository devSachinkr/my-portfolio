"use client";

import { signIn } from "@/actions/auth";
import ToastNotify from "@/components/global/toast";
import { AuthFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useAuth = () => {
  const form = useForm<z.infer<typeof AuthFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const onSubmit = form.handleSubmit(async ({ email, name, password }) => {
    const res = await signIn({ email, password, name });
    if (res?.status === 200) {
      ToastNotify({
        title: "Success",
        msg: res.message,
      });
      localStorage.setItem("token", JSON.stringify(res.data?.token));
    } else {
      ToastNotify({
        title: "Oops!",
        msg: res?.message as string,
      });
    }
    form.reset();
  });
  return { form, onSubmit };
};
export { useAuth };
