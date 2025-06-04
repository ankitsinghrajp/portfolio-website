import React from 'react'
import projects from "@/data/all-projects.json"
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const ProjectsPage = () => {
  return (
    <div className='container mx-auto'>
           <h2 className='text-4xl pt-5 md:text-5xl  pl-8 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent '>All Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-8 mx-5">
            {projects.map((project) => {
              return (
                <Card key={project.id} className="bg-blue-200 dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle>
                    <Image className="h-56 w-full object-cover rounded-md" src={project.imageUrl} height={450} width={800} alt={project.title}/>
                    </CardTitle>
                    <CardDescription className="mx-2">
                      <h1 className="text-xl my-2 font-bold dark:text-gray-200">{project.title}</h1>
                      <p className="dark:text-gray-200 font-semibold">Deployed App Link: {" "}
                        <Link className="text-blue-600 underline" target="_blank" href={project.deployedLink}>Live Preview</Link>
                      </p>
                      <p className="my-2">{project.description}</p>
                      <Link href={`/projects/project/${project.id}`}>
                      <Button className="w-full font-bold">View Project</Button>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                 
                </Card>
              );
            })}
          </div>
    </div>
  )
}

export default ProjectsPage