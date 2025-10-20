import Link from 'next/link';
import React from 'react'
import { Badge } from '../ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import projects from "@/data/top-projects.json";

const ProjectsSection = () => {
  return (
    <div id="projects" className="border-dotted py-5 border-b border-gray-600">
      <div className="container mx-auto">
        <h2 className="text-4xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          My Projects
        </h2>
        <div className="relative mb-1">
          <Link className="absolute top-0 right-5" href="/projects">
            <Badge className={'py-1 dark:text-gray-300 text-gray-700 px-4'} variant={'outline'}>
              View All
            </Badge>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-12 mx-5">
          {projects.map((project) => {
            return (
              <div key={project.id} className="relative group">
                {/* Gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <Card className="relative bg-blue-200 border border-gray-400 dark:border-gray-700 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                  <CardHeader>
                    <CardTitle className="overflow-hidden rounded-md">
                      <Image 
                        className="h-56 w-full object-cover rounded-md group-hover:scale-110 transition-transform duration-500" 
                        src={project.imageUrl} 
                        height={450} 
                        width={800} 
                        alt={project.title}
                      />
                    </CardTitle>
                    <CardDescription className="mx-2">
                      <h1 className="text-xl my-2 font-bold dark:text-gray-200 text-gray-800 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h1>
                      <p className="dark:text-gray-200 text-gray-700 font-semibold">
                        Deployed App Link: {" "}
                        <Link className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors duration-200" target="_blank" href={project.deployedLink}>
                          Live Preview
                        </Link>
                      </p>
                      <p className="my-2 dark:text-gray-300 text-gray-700 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>
                      <Link href={`/projects/project/${project.id}`}>
                        <Button className="w-full font-bold hover:scale-105 transition-transform duration-200">
                          View Project
                        </Button>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection