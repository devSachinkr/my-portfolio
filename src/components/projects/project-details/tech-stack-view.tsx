import { getIconURLByName } from '@/lib/constants'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PROJECT_WITH_TECH_STACK_AND_TAGS } from '@/lib/types';
import React from 'react'

interface Props {
    data: PROJECT_WITH_TECH_STACK_AND_TAGS[0] ;
}

const TechStackView = ({data}: Props) => {
    return (
        <Accordion type="multiple">
        {data.techStack.map((t) => (
          <AccordionItem   key={t.id} value={t.name}>
            <AccordionTrigger className="capitalize p-4 md:text-lg text-md flex justify-between hover:no-underline  ">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={getIconURLByName(t.name) || ""}
                    width={40}
                    height={40}
                  />
                  <AvatarFallback className="bg-gradient-to-b from-gray-700 via-slate-500 to-slate-700">
                    {t.name.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
                {t.name}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 text-start text-gray-400">
              {t.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
}

export default TechStackView
