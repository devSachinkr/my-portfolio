"use client";

import {
  getAllProject,
  getProjectDetails,
  upsertProject,
} from "@/actions/project";
import ToastNotify from "@/components/global/toast";
import { uploadFile } from "@/lib/cloudinary";
import { ProjectFormSchema } from "@/lib/schema";
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project, Tags, TechStack } from "@prisma/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { v4 } from "uuid";
import { z } from "zod";

const useProjectForm = ({
  userId,
  formDefaultData,
}: {
  userId: string;
  formDefaultData?: Project & {
    tags: Partial<Tags[]>;
    techStack: Partial<TechStack[]>;
  };
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState<string>("");
  const [AllTags, setAllTags] = useState<{ name: string }[]>([]);
  console.log(selectedFiles);
  const [techDesc, setTechDesc] = useState<string>("");
  const [techName, setTechName] = useState<string>("");
  const [allTechStack, setAllTechStack] = useState<
    { name: string; description: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof ProjectFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: formDefaultData?.name || "",
      description: formDefaultData?.description || "",
      githubLink: formDefaultData?.githubLink || "",
      hostedLink: formDefaultData?.hostedLink || "",
      projectCreatedAt: formDefaultData?.projectCreatedAt || "",
      hostedPlatform: formDefaultData?.hostedPlatform || "",
    },
  });

  const handleTechStack = () => {
    if (!techName || !techDesc)
      return ToastNotify({
        title: "Oops!",
        msg: "Both fields are required ",
      });

    if (
      allTechStack.find((t) => t.name.toLowerCase() === techName.toLowerCase())
    ) {
      return ToastNotify({
        title: "Oops!",
        msg: "Tech stack already mentioned",
      });
    }
    setAllTechStack((prev) => [
      ...prev,
      {
        name: techName,
        description: techDesc,
      },
    ]);
    setTechDesc("");
    setTechName("");
  };

  const handleAddTags = () => {
    if (!tagValue)
      return ToastNotify({
        title: "Oops!",
        msg: "Tag must have a name",
      });
    if (AllTags.find((t) => t.name.toLowerCase() === tagValue.toLowerCase())) {
      return ToastNotify({
        title: "Oops!",
        msg: "Tag is already exist",
      });
    }
    setAllTags((prev) => [
      ...prev,
      {
        name: tagValue,
      },
    ]);
    setTagValue("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setSelectedFiles(Array.from(files));
    }
  };

  const uploadTHumbnail = async () => {
    setIsUploading(true);
    try {
      const uploadPromises = selectedFiles.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME!
        );

        return uploadFile({ data: formData });
      });

      const urls = await Promise.all(uploadPromises);
      setUploadedUrls(urls);
      console.log("Uploaded URLs:", urls);
      return ToastNotify({
        title: "Success",
        msg: "Thumbnails uploaded successfully",
      });
    } catch (error) {
      console.error("Error uploading images:", error);
      return ToastNotify({
        title: "Oops!",
        msg: "Failed to upload Thumbnails ",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = form.handleSubmit(
    async ({
      description,
      name,
      githubLink,
      hostedLink,
      hostedPlatform,
      projectCreatedAt,
    }) => {
      setLoading(true);
      if (!userId) {
        return ToastNotify({
          title: "Oops!",
          msg: "User ID must be provided",
        });
      }

      if (uploadedUrls.length) {
        const res = await upsertProject({
          name,
          description,
          githubLink,
          hostedLink,
          hostedPlatform,
          projectCreatedAt,
          id: formDefaultData?.id || v4(),
          thumbnail: uploadedUrls,
          userId,
          tags: AllTags,
          techStack: allTechStack,
        });

        if (res.status !== 200) {
          setLoading(false);
          return ToastNotify({
            title: "Oops!",
            msg: res.message,
          });
        }
        if (res.status === 200) {
          setLoading(false);
          setTechName("");
          setTechDesc("");
          setTagValue("");
          setAllTags([]);
          setAllTechStack([]);
          form.reset();
          return ToastNotify({
            title: "Success",
            msg: "Changes Reflected!",
          });
        }
      } else {
        setLoading(false);

        return ToastNotify({
          title: "Oops!",
          msg: "Please upload thumbnail",
        });
      }
    }
  );

  return {
    form,
    handleFileChange,
    onSubmit,
    uploadedUrls,
    setTagValue,
    AllTags,
    handleAddTags,
    tagValue,
    allTechStack,
    techDesc,
    setTechDesc,
    setTechName,
    techName,
    handleTechStack,
    uploadTHumbnail,
    isUploading,
    loading,
  };
};

const useProject = (projectId?: string) => {
  const [allProjectDetails, setAllProjectDetails] =
    useState<PROJECT_WITH_TECH_STACK_AND_TAGS>([]);
  const [projectDetails, setProjectDetails] = useState<
    PROJECT_WITH_TECH_STACK_AND_TAGS[0] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [tagColors, setTagColors] = useState<string[]>([]);

  const getAllProjects = async () => {
    setLoading(true);
    const res = await getAllProject();
    console.log(res);
    if (res.status === 200) {
      setLoading(false);
      return setAllProjectDetails(res.data as PROJECT_WITH_TECH_STACK_AND_TAGS);
    }
    setAllProjectDetails([]);
    setLoading(false);
  };

  const getProjectDetail = async () => {
    setIsFetching(true);
    if (!projectId) return;
    const res = await getProjectDetails({ projectId });
    if (res.status !== 200) {
      setProjectDetails(null);
      setIsFetching(false);
      return ToastNotify({
        title: "Oops!",
        msg: res.message,
      });
    }

    if (res.status === 200) {
      setIsFetching(false);

      return setProjectDetails(res.data as PROJECT_WITH_TECH_STACK_AND_TAGS[0]);
    }
  };

  function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  useEffect(() => {
    if (projectDetails) {
      setTagColors(projectDetails.tags.map(() => generateRandomColor()));

      const colorInterval = setInterval(() => {
        setTagColors(projectDetails.tags.map(() => generateRandomColor()));
      }, 1000);

      return () => clearInterval(colorInterval);
    }
  }, [projectDetails]);

  useEffect(() => {
    if (projectId) {
      getProjectDetail();
    }
  }, [projectId]);
  useEffect(() => {
    getAllProjects();
  }, []);
  console.log(allProjectDetails);
  return { allProjectDetails, loading, isFetching, projectDetails, tagColors };
};
export { useProject, useProjectForm };
