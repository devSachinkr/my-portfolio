import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useProjectForm } from "@/hooks/project";
import { Ban, Upload } from "lucide-react";
import React from "react";
import Spinner from "../../spinner";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
type Props = {
  userId: string;
  data?: PROJECT_WITH_TECH_STACK_AND_TAGS[0]| null;
};

const ProjectForm = ({ userId, data }: Props) => {
  const {
    form,
    handleFileChange,
    onSubmit,
    AllTags,
    setTagValue,
    handleAddTags,
    tagValue,
    allTechStack,
    setTechDesc,
    setTechName,
    techDesc,
    techName,
    handleTechStack,
    uploadTHumbnail,
    isUploading,
    loading,
  } = useProjectForm({
    userId,
    formDefaultData: data || null,
  });
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="p-5 ">
        <div className="flex items-center justify-center gap-3">
          <Input
            disabled={isUploading}
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
          />

          <Button
            disabled={isUploading}
            onClick={() => uploadTHumbnail()}
            className="hover:bg-purple-700 border-[1px] border-purple-600 bg-transparent flex items-center justify-center"
          >
            <Spinner
              loading={isUploading}
              className="flex items-center justify-center gap-3"
            >
              <Upload size={20} />
              Upload
            </Spinner>
          </Button>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter project name" {...field} />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter project description"
                    rows={6}
                    {...field}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="bg-purple-600 mt-3" />
        <FormField
          control={form.control}
          name="hostedLink"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormItem>
                <FormLabel>Hosted Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example.vercel.app / example.netlify.app / example.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hostedPlatform"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormItem>
                <FormLabel>Hosted Platform</FormLabel>
                <FormControl>
                  <Input
                    placeholder="vercel / netlify / Hostinger / Go-Daddy / more..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubLink"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormItem>
                <FormLabel>Github Link</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Github Link" {...field} />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectCreatedAt"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormItem>
                <FormLabel>Project Duration :- (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="15-AUG-2024  to 16-DEC-2024" {...field} />
                </FormControl>
              </FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="bg-purple-600 mt-3" />

        {/* Display Tags */}
        <Label className="">All Tags</Label>

        {AllTags?.length !== 0 && (
          <ScrollArea className="w-full">
            <div className="flex flex-col  mt-3 ">
              <div className="flex my-3 p-3 justify-start gap-3 border-[1px] border-purple-600 rounded-md  ">
                {AllTags.map((tag) => (
                  <span
                    key={tag?.name}
                    className=" flex items-center justify-center border-[1px] border-lime-500 px-4 h-10 rounded-md"
                  >
                    {tag?.name}
                  </span>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        )}

        <div className="flex gap-3 my-3">
          <Input
            value={tagValue}
            placeholder="Enter project description"
            onChange={(e) => setTagValue(e.target.value)}
          />
          <Button
            type="button"
            onClick={handleAddTags}
            className="hover:bg-purple-700"
          >
            Add
          </Button>
        </div>
        <Separator className="mb-3" />
        <Label className="text-muted-foreground">Tech Stack</Label>
        <div className="flex flex-col md:flex-row  gap-4">
          <div className="flex flex-col  my-3 md:w-[50%]">
            <div className=" flex flex-col gap-y-4">
              <div className="w-full flex flex-col gap-y-3">
                <Label>Tech Name</Label>
                <Input
                  value={techName}
                  placeholder="Enter project description"
                  onChange={(e) => setTechName(e.target.value)}
                />
                <Label>Tech Description</Label>

                <Textarea
                  value={techDesc}
                  onChange={(e) => setTechDesc(e.target.value)}
                  rows={6}
                  placeholder="Enter what is the role of mentioned tech stack"
                />
              </div>

              <Button
                type="button"
                onClick={handleTechStack}
                className="hover:bg-purple-700 w-full bg-transparent border-[1px] border-purple-600"
              >
                Add
              </Button>
            </div>
          </div>
          {/* Display Techstack */}
          <ScrollArea className="h-80 md:w-[50%] rounded-md ">
            <Card className="flex flex-col  my-3 h-full ">
              <CardHeader className="text-xl font-semibold">
                Tech Stack
              </CardHeader>
              <CardContent>
                {allTechStack?.length !== 0 ? (
                  <Accordion type="multiple">
                    {allTechStack.map((tech) => (
                      <AccordionItem
                        key={tech.name}
                        value={tech.name}
                        className="px-5 py-2"
                      >
                        <AccordionTrigger className="font-semibold text-[1.2rem]">
                          {tech.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm">
                          {tech.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <span className="flex flex-col gap-5 items-center justify-center text-[2.5rem] text-muted-foreground font-semibold capitalize w-full text-center text-wrap">
                    No Tech stack Mentioned
                    <Ban size={70} />
                  </span>
                )}
              </CardContent>
            </Card>
          </ScrollArea>
        </div>

        <div className="mt-4 flex justify-end items-center">
          <Button
            type="submit"
            className="hover:bg-purple-700 bg-transparent border-[1px] border-purple-600"
          >
            <Spinner
              loading={loading}
              className="flex items-center justify-center gap-3"
            >
              Save
            </Spinner>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectForm;
