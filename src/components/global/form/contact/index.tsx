"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContact } from "@/hooks/contact";
import {  Github, Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  const { form, onSubmit, loading } = useContact();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className=" lg:w-[34vw] w-[70vw]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="text-white/90">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Name " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="text-white/90">Email</FormLabel>
              <FormControl>
                <Input
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
          name="number"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="text-white/90">Number</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter Your Number "
                  {...field}
                />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="text-white/90">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message must be 5 character long"
                  maxLength={500}
                  minLength={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between">
          <div className="flex items-center justify-center gap-4 mt-3">
           
            <Link
              href={"https://github.com/devSachinkr"}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full aspect-square bg-gradient-to-l from-gray-600 to-themeBlack"
            >
              <Github />
            </Link>
          </div>
          <Button className="mt-3 flex hover:bg-purple-800 " disabled={loading}>
            {loading ? <Loader2 className="animate-spin"/>: <p>Submit</p>}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
