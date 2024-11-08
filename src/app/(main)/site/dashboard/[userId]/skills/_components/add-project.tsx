import ProjectForm from '@/components/global/form/project'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const AddProject = ({userId}:{userId:string}) => {
  return (
    <div className="w-full h-full mb-6 ">
        <Card>
            <CardHeader>
                Add New Project
            </CardHeader>
            <CardContent className='container p-5 m-5'>
                <ProjectForm userId={userId}/>
            </CardContent>
        </Card>

    </div>
  )
}

export default AddProject