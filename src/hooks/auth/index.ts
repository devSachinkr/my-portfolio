"use client";

import { signIn } from "@/actions/auth";
import ToastNotify from "@/components/global/toast";
import { AuthFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useAuth = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const form = useForm<z.infer<typeof AuthFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: "",
      password: "",
      otp: "",
    },
  });

  type Props = {
    next?: () => void;
  };
  const changeStep = ({ next }: Props) => {
    setStep((prev) => (prev === 1 ? 2 : 1));
    if (next) {
      next();
    }
  };

  const onSubmit = form.handleSubmit(async ({ email, password, otp }) => {
    const res = await signIn({ email, password, userOtp: otp });
    if (res?.status === 200) {
      ToastNotify({
        title: "Success",
        msg: res.message,
      });
      localStorage.setItem("token", JSON.stringify(res.data?.token));
      localStorage.setItem("user", JSON.stringify(res.data));

      router.push(`/site/dashboard/${res.data?.id as string}/home`);
    } else {
      ToastNotify({
        title: "Oops!",
        msg: res?.message as string,
      });
    }
  });

  return { form, onSubmit, changeStep, step, email, setEmail };
};
export { useAuth };
