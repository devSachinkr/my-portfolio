import AddSkillForm from '@/components/global/form/skill'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

type Props = {
    userId:string
}

const AddNewSkill = ({userId}: Props) => {
  return (
    <Card className="p-8">
        <CardHeader className="font-semibold text-3xl">Add New Skill</CardHeader>
        <CardContent>
             <AddSkillForm userId={userId}/>
        </CardContent>
     
    </Card>
  )
}

export default AddNewSkill