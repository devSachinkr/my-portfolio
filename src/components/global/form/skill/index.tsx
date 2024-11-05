import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useSkillForm } from "@/hooks/skills";
import { getIconURLByName } from "@/lib/constants";
import React, { useState } from "react";
type Props = {
  userId: string;
};
const AddSkillForm = ({ userId }: Props) => {
  const { addSkillData, form } = useSkillForm({ userId });
  const [value, setValue] = useState<string>("");
  return (
    <Form {...form}>
      <form onSubmit={addSkillData} className="flex flex-col">
        <div className="flex items-center justify-end">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
            <Avatar className="flex items-center justify-center w-full">
              <AvatarImage src={getIconURLByName(value)} />
              <AvatarFallback>Preview</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              >
                <FormLabel>Skill Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter skill name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end container w-full m-5">
            <Button className="hover:bg-purple-700 ">Save</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AddSkillForm;
