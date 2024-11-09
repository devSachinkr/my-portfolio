import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getIconURLByName } from "@/lib/constants";
import type { TechStack } from "@prisma/client";
import React from "react";

type Props = {
  data: TechStack[];
};

const TechStack = ({ data }: Props) => {
  return (
    <Card className="w-[150%] bg-transparent mb-10">
      <CardHeader>Tech used to build this project :-</CardHeader>
      <CardContent>
        <Accordion type="multiple">
          {data.map((t) => (
            <AccordionItem key={t.id} value={t.name} className="px-5 py-2">
              <AccordionTrigger className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={getIconURLByName(t.name.toLocaleLowerCase())}
                      alt={t.name}
                      width={30}
                      height={30}
                    />
                    <AvatarFallback>
                      {t.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  {t.name}
                </div>
              </AccordionTrigger>
              <AccordionContent>{t.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default TechStack;
