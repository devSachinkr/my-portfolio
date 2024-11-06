import ProjectForm from '@/components/global/form/project'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const AddProject = () => {
  return (
    <div className="w-full h-full ">
        <Card>
            <CardHeader>
                Add New Project
            </CardHeader>
            <CardContent>
                <ProjectForm/>
            </CardContent>
        </Card>

    </div>
  )
}

export default AddProject