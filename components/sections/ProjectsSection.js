import Link from 'next/link';
import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import projects from "@/data/top-projects.json";

const ProjectsSection = () => {
  return (
    <div id="projects" className="border-dotted py-10 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-end justify-between pt-5 pb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
            My Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group/link"
          >
            View All
            <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.id} className="relative group flex flex-col">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <Card className="relative flex flex-col h-full bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/60 group-hover:border-blue-400/50 dark:group-hover:border-blue-500/40 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-500/5 overflow-hidden">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imageUrl}
                    height={450}
                    width={800}
                    alt={project.title}
                  />
                  {/* Live link overlay badge */}
                  {project.deployedLink && (
                    <Link
                      href={project.deployedLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10 hover:bg-black/80 transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live
                      <ExternalLink className="h-3 w-3 ml-0.5" />
                    </Link>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="text-[15px] font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <Link
                    href={`/projects/project/${project.id}`}
                    className="mt-1 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;