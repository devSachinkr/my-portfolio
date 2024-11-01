"use client";

import { ContactFormSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
    console.log(email);
    console.log(message);
    console.log(name);
    console.log(number);
  });
  return { form,onSubmit };
};

export { useContact };
