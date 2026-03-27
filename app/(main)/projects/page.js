import React from "react";
import projects from "@/data/all-projects.json";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, FolderOpen } from "lucide-react";

// ✅ SEO Metadata
export const metadata = {
  title:
    "Projects | Ankit Singh Chouhan | Full Stack Developer | Backend Engineer",

  description:
    "Explore all projects by Ankit Singh Chouhan — Full Stack Developer and Backend Engineer from VIT Bhopal. Built scalable web apps using Next.js, React, Node.js, MongoDB, and PHP. Includes real-world apps, freelance work, and SaaS products.",

  keywords: [
    "Ankit Singh Chouhan projects",
    "Ankit Singh Chouhan VIT",
    "Ankit Singh backend engineer",
    "MERN stack projects",
    "React projects",
    "Next.js projects",
    "Node.js apps",
    "Full Stack Developer portfolio",
    "Web development projects",
  ],

  openGraph: {
    title: "Projects | Ankit Singh Chouhan",
    description:
      "Showcase of full stack and SaaS projects by Ankit Singh Chouhan — built using React, Next.js, Node.js, PHP, and MongoDB.",
    url: "https://ankits-portfolio-omega.vercel.app/projects",
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "https://ankits-portfolio-omega.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Singh Chouhan Project Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Ankit Singh Chouhan",
    description:
      "Explore full-stack and backend projects by Ankit Singh Chouhan — MERN, Next.js, and PHP apps.",
    images: [
      "https://ankits-portfolio-omega.vercel.app/og-image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b]">
      <div className="container mx-auto px-4 py-10 max-w-7xl">

        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FolderOpen className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 tracking-wide uppercase">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent mb-3">
            All Projects
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-[15px] max-w-xl">
            A collection of full-stack applications, client work, and personal builds — crafted with modern web technologies.
          </p>
          {/* Divider */}
          <div className="mt-6 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />
        </div>

        {/* Count */}
        <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-6">
          {projects.length} projects
        </p>

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
                  {/* Live badge */}
                  <div className="absolute top-3 right-3">
                    {project.deployedLink ? (
                      <Link
                        href={project.deployedLink}
                        target="_blank"
                        className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10 hover:bg-black/80 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live
                        <ExternalLink className="h-3 w-3 ml-0.5" />
                      </Link>
                    ) : (
                      <span className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-black/60 text-gray-400 backdrop-blur-sm border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        No Preview
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h2 className="text-[15px] font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* CTA */}
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

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FolderOpen className="h-10 w-10 text-gray-300 dark:text-gray-600 mb-3" />
            <p className="text-gray-400 dark:text-gray-500 font-medium">No projects yet.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectsPage;