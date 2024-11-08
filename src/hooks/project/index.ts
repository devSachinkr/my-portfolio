"use client";

import { upsertProject } from "@/actions/project";
import ToastNotify from "@/components/global/toast";
import { uploadFile } from "@/lib/cloudinary";
import { ProjectFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project, Tags, TechStack } from "@prisma/client";
import { useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";

const useProject = () => {};

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
  const [isUploading,setIsUploading]=useState<boolean>(false);
  const form = useForm<z.infer<typeof ProjectFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: formDefaultData?.name || "",
      description: formDefaultData?.description || "",
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
    }finally{
        setIsUploading(false);
    }
  };

  const onSubmit = form.handleSubmit(async ({ description, name }) => {
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
        id: formDefaultData?.id || v4(),
        thumbnail: uploadedUrls,
        userId,
        tags: AllTags,
        techStack: allTechStack,
      });

      if (res.status !== 200) {
        return ToastNotify({
          title: "Oops!",
          msg: res.message,
        });
      }
      if (res.status === 200) {
        return ToastNotify({
          title: "Success",
          msg: "Changes Reflected!",
        });
      }
    } else {
      return ToastNotify({
        title: "Oops!",
        msg: "Please upload thumbnail",
      });
    }
  });

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
    isUploading
  };
};
export { useProject, useProjectForm };
