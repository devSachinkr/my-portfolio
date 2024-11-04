"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/auth";
import React from "react";
import OTPForm from "./otp-form";
import { sendMail } from "@/lib/send-mail";
import { cn } from "@/lib/utils";

const LoginForm = () => {
  const { form, onSubmit, step, changeStep, email, setEmail } = useAuth();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className=" lg:w-[34vw] w-[70vw] relative">
        <div className="w-[80vw] h-full bg-white rounded-full aspect-square absolute -z-10 bg-gradient-to-bl  from-purple-600 via-lime-800 to-blue-600 blur-[100px]" />
        {step === 1 ? (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="text-white/90">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="outline outline-[1px] text-white outline-white"
                      type="text"
                      placeholder="Enter Your Name "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem
                  className="mt-4"
                  onChange={(val:React.ChangeEvent<HTMLInputElement>) => setEmail(val.target.value as string)}
                >
                  <FormLabel className="text-white/90">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="outline outline-[1px] text-white outline-white"
                      type="email"
                      placeholder="Enter Your Email "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="text-white/90">Password</FormLabel>
                  <FormControl>
                    <Input
                      className="outline outline-[1px] text-white outline-white"
                      type="text"
                      placeholder="Enter Password "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <OTPForm form={form} />
        )}
        <div
          className={cn(
            `w-full flex  items-center mt-3`,
            step === 1 ? "justify-end" : "justify-between"
          )}
        >
          {step === 2 && (
            <Button
              type="button"
              onClick={() => changeStep({})}
              className="hover:bg-purple-700 w-[20vw] md:w-[10vw]"
            >
              {" "}
              Back
            </Button>
          )}
          <Button
            type="button"
            onClick={() => {
              return step === 1
                ? changeStep({
                    next: () => sendMail(email),
                  })
                : onSubmit();
            }}
            className="hover:bg-purple-700 w-[20vw] md:w-[10vw]"
          >
            {" "}
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
