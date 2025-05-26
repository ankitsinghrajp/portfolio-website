"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import projects from "@/data/project.json";
import services from "@/data/services.json";
import {
  BadgeCheck,
  Brain,
  CircleDot,
  Database,
  GraduationCap,
  Layers,
  Network,
  School,
  Shapes,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import CarouselSection from "@/components/CarouselSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
export default function HOME() {
  const iconMap = {
    ShieldCheck,
    Layers,
    Brain,
    Network,
    Database,
    Shapes,
  };

  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setOpen(true);
  };
  return (
    <>
      {/* Hero Section */}
      <div className="dotted-background pt-20 border-dotted  border-b border-gray-600 dark:border-gray-600">
        {/* <div className="">
            Ankit Singh Chouhan
        
           </div> */}
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col w-full">
            <div className="md:w-[25%] md:hidden ">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-full h-56 w-56"
                  src={"/myprofile.png"}
                  height={80}
                  width={80}
                  alt="profile"
                />
              </div>
            </div>
            <div className="md:w-[75%] mx-5 md:mx-10">
              <div className="flex flex-col  mt-20 h-[400px]">
                <h2 className="text-2xl md:font-semibold mb-2">Hi There,</h2>
                <div className="md:text-5xl flex mt-2  text-2xl font-bold">
                  I'M
                  <div className="words">
                    <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none">
                      Frontend Developer
                    </span>
                    <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none">
                      Full Stack Developer
                    </span>
                    <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none">
                      Backend Developer
                    </span>
                    <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none">
                      Software Developer
                    </span>
                    <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none">
                      Freelancer
                    </span>
                  </div>
                </div>
                <p className="-mt-40 z-20 text-xl pb-28 dotted-background md:block hidden dark:text-gray-300 text-gray-800 bg-[#eeeeff] dark:bg-[#09090b]">
                  I'm a passionate Full-Stack Developer who builds responsive,
                  scalable web applications with modern tech and AI integration
                  to create smarter user experiences.{" "}
                </p>
                <p className=" z-20 pb-28 dotted-background md:hidden -mt-32 dark:text-gray-300 text-gray-800 bg-[#eeeeff] dark:bg-[#09090b]">
                  I'm a passionate Full-Stack Developer who builds responsive,
                  scalable web applications with modern tech and AI integration
                  to create smarter user experiences.{" "}
                </p>
                <div className="-mt-20 z-40 flex items-center gap-5 ml-1 mr-4">
                  <Button
                    variant="outline"
                    className="w-full font-semibold text-white hover:bg-purple-700 bg-purple-600"
                    asChild
                  >
                    <a href="/ankits-resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                  <Link className="w-full" href={'#projects'}>
                  <Button
                    variant="outline"
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white"
                  >
                    Projects
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-[25%] md:block hidden ">
              <div className="flex items-center justify-center h-[400px]">
                <Image
                  className="rounded-full h-56 w-56"
                  src={"/myprofile.png"}
                  height={100}
                  width={100}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="border-dotted py-10 border-b border-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent  pr-2">
            Skills
          </h2>
          <CarouselSection />
        </div>
      </div>

      {/* Education & Programming languages section */}
      <div className="border-dotted py-10 border-b border-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent  pr-2">
            Education & Programming Languages
          </h2>

          <Tabs defaultValue="education" className="px-4 py-10">
            <TabsList className="w-full dark:bg-[#262626] text-white bg-gray-500">
              <TabsTrigger className="w-1/2" value="education">
                Education
              </TabsTrigger>
              <TabsTrigger className="w-1/2" value="programming">
                Programming Language
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="dark:bg-black bg-blue-200 mx-2 p-5 rounded-md dark:text-white"
              value="education"
            >
              <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-8">
                <Card className="mt-3 border border-gray-600 dark:border-gray-200 dark:bg-gray-900 rounded-md p-8">
                  <h2 className="flex items-center gap-2 mb-3 text-2xl text-gray-800 dark:text-gray-200 font-bold">
                    <GraduationCap className="h-8 w-8 dark:text-purple-400" />
                    University
                  </h2>
                  <h3 className="font-semibold md:text-xl text-gray-800 dark:text-gray-200 mb-1">
                    BTech & MTech in Computer Science Engineering
                  </h3>
                  <p className="font-bold text-gray-600 dark:text-gray-400">(2022 - 2027)</p>
                  <p className=" text-gray-700 dark:text-gray-400 mb-1 font-semibold">
                    Vellore Institute Of Technology (VIT)
                  </p>
                  <p className=" mb-2 text-gray-700 dark:text-gray-400 font-semibold">
                    Bhopal Campus (Madhya Pradesh)
                  </p>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-400 mb-1">
                    CGPA - 8.2
                  </h3>
                </Card>
                <Card className="mt-3 border border-gray-600 dark:border-gray-200 dark:bg-gray-900 rounded-md p-8">
                  <h2 className="flex text-gray-800 items-center gap-2 mb-3 text-2xl dark:text-gray-200 font-bold">
                    <School className="h-7 w-7 dark:text-purple-400 " />
                    School
                  </h2>
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">
                    Higher Secondary School
                  </h3>
                  <p className=" text-gray-700 dark:text-gray-400 mb-1 font-semibold">
                    Chaitanya Keerti School Roopakhedi
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-400 font-semibold">
                    Ujjain (Madhya Pradesh)
                  </p>
                  <h3 className=" font-semibold text-gray-700 dark:text-gray-400 mb-1">
                    Class 10th - 90.33%
                  </h3>
                  <h3 className=" font-semibold text-gray-700 dark:text-gray-400 mb-1">
                    Class 12th - 81.4%
                  </h3>
                </Card>
              </div>
            </TabsContent>

            <TabsContent
              className="dark:bg-black bg-blue-200 mx-2 p-5 rounded-md dark:text-white"
              value="programming"
            >
              <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-8">
                <Card className="mt-3 dark:bg-gray-900 rounded-md border border-green-500 dark:border-green-600 p-8">
                  <h2 className="flex items-center gap-2 mb-3 text-2xl text-gray-800 dark:text-gray-200 font-bold">
                    <BadgeCheck className="h-8 w-8 text-green-500" />
                    Proficient In
                  </h2>
                  <li className="font-semibold ml-5 text-gray-700 list-disc dark:text-gray-300 mb-1">
                    C++
                  </li>
                  <li className="font-semibold list-disc text-gray-700 ml-5 dark:text-gray-300 mb-1">
                    JavaScript
                  </li>
                  <li className="font-semibold list-disc text-gray-700 ml-5 dark:text-gray-300 mb-1">
                    Python
                  </li>
                  <li className="font-semibold list-disc text-gray-700 ml-5 dark:text-gray-300 mb-1">
                    SQL
                  </li>
                </Card>
                <Card className="mt-3 dark:bg-gray-900 border border-yellow-500 rounded-md p-8">
                  <h2 className="flex items-center gap-2 mb-3 text-2xl text-gray-800 dark:text-gray-200 font-bold">
                    <CircleDot className="h-7 w-7 text-yellow-500 " />
                    Familiar With
                  </h2>
                  <li className="font-semibold ml-5 list-disc text-gray-700 dark:text-gray-300 mb-1">
                    Java
                  </li>
                  <li className="font-semibold list-disc  ml-5 text-gray-700 dark:text-gray-300 mb-1">
                    TypeScript
                  </li>
                  <li className="font-semibold list-disc  ml-5 text-gray-700 dark:text-gray-300 mb-1">
                    R
                  </li>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* My services section */}
      <div className="border-dotted py-5 border-b border-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent  pr-2">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <Card
                  key={service.id}
                  className="mx-4 hover:cursor-pointer ease-in-out my-2 bg-blue-100 border border-gray-400 dark:border-gray-800 dark:bg-black"
                  onClick={() => handleCardClick(service)}
                >
                  <CardHeader className="text-center">
                    <h2 className="flex justify-center items-center py-2">
                      {Icon && (
                        <Icon className="h-10 w-10 dark:text-blue-500 text-blue-700" />
                      )}
                    </h2>
                    <CardTitle className="text-xl font-semibold mb-2 dark:text-gray-100 text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className=" text-gray-700 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="border-dotted py-5 border-b border-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent  pr-2">
            My Projects
          </h2>
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
                      <Link href={`/project/${project.id}`}>
                      <Button className="w-full font-bold">View Project</Button>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                 
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="dark:bg-[#09090b] bg-blue-100">
              <DialogTitle className="text-2xl dark:text-gray-200 text-gray-800 font-bold">
                {selectedService.dialogTitle}
              </DialogTitle>
              <DialogDescription className="dark:text-gray-400 text-gray-800 text-md">
                {selectedService.dialogDescription}
              </DialogDescription>
              <h1 className="text-2xl dark:text-gray-200 text-gray-800 font-bold">
                {selectedService.keyHighlights}
              </h1>
              <h2 className="dark:text-gray-400 text-gray-800 text-md">
                - {selectedService.highlight1}
              </h2>
              <h2 className="dark:text-gray-400 text-gray-800 text-md">
                - {selectedService.highlight2}
              </h2>
              <h2 className="dark:text-gray-400 text-gray-800 text-md">
                - {selectedService.highlight3}
              </h2>
              <h2 className="dark:text-gray-400 text-gray-800 text-md">
                - {selectedService.highlight4}
              </h2>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
