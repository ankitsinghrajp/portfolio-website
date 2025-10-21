import React from "react";
import projects from "@/data/all-projects.json";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ✅ SEO Metadata for this page
export const metadata = {
  title: "Projects | Ankit Singh Chouhan | Full Stack Developer",
  description:
    "Explore all projects by Ankit Singh Chouhan — Full Stack Developer skilled in MERN, PHP, and modern web technologies. Real-world apps, client work, and internship projects with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Ankit Singh Chouhan projects",
    "MERN stack projects",
    "React projects",
    "Next.js projects",
    "Node.js apps",
    "Full Stack Developer portfolio",
    "PHP projects",
    "Web development projects",
  ],
  openGraph: {
    title: "All Projects | Ankit Singh Chouhan",
    description:
      "Showcase of Ankit Singh Chouhan’s full stack and freelance projects — built using React, Next.js, Node.js, PHP, and MongoDB.",
    url: "https://your-portfolio-link.com/projects", // replace with your deployed link
    siteName: "Ankit Singh Portfolio",
    images: [
      {
        url: "https://your-portfolio-link.com/og-image.jpg", // optional preview image
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
      "Explore all full-stack projects by Ankit Singh Chouhan — built using MERN stack and PHP.",
    images: ["https://your-portfolio-link.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pt-5 md:text-5xl pl-8 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent">
        All Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-8 mx-5">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

            <Card className="relative bg-slate-300/40 border border-gray-400 dark:border-gray-700 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
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
                    Deployed App Link:{" "}
                    {project.deployedLink ? (
                      <Link
                        className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors duration-200"
                        target="_blank"
                        href={project.deployedLink}
                      >
                        Live Preview
                      </Link>
                    ) : (
                      <span className="text-sm text-red-500">No preview Available</span>
                    )}
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
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
