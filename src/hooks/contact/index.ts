"use client";

import { ContactFormSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addContactDetails } from "@/actions/contact";
import ToastNotify from "@/components/global/toast";
const useContact = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      number: "",
    },
  });
  const { handleSubmit } = form;
  const onSubmit = handleSubmit(async ({ email, message, name, number }) => {
    const res = await addContactDetails({
      email,
      message,
      name,
      phone: number??"",
    });

    if (res?.status !== 201) {
      return ToastNotify({
        title: "Oops!",
        msg: res?.message as string,
      });
    }
    form.reset();
    return ToastNotify({
      title: "Success",
      msg: res?.message as string,
    });
  });
  return { form, onSubmit };
};

export { useContact };
