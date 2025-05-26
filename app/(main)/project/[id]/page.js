import Hero from "@/components/hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projects from "@/data/project.json";
import Link from "next/link";

const Page = async ({ params }) => {
  const { id } = await params;

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <>Project not found!</>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="container mx-auto">
          <div className="p-5 ">
            <h2 className="text-3xl  md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent  pr-2">
              {project.title}
            </h2>
            <p className="dark:text-gray-300 text-xl text-gray-600 mb-2">
              {project.description}
            </p>
            <div className="flex gap-1 font-bold italic text-gray-600 text-sm my-2">
              <Link
                href={project.deployedLink}
                className="dark:text-blue-500 underline text-blue-700"
                target="_blank"
              >
                View Live
              </Link>{" "}
              |{" "}
              <Link
                href={project.GithubRepo}
                className="dark:text-blue-500 underline text-blue-700"
                target="_blank"
              >
                Github
              </Link>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between mt-10 w-full">
              <div className="w-[40%]  mr-10 hidden md:block px-2">

                <Card className="dark:bg-[#09090b] h-full w-full bg-[#EEEEFF]">
                  <CardHeader>
                    <CardTitle className="text-3xl dark:text-gray-300 font-extrabold">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-5 flex-col">
                   {project.frontend && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Frontend:</h2>
                    {project.frontend.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}


                   {project.backend && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Backend:</h2>
                    {project.backend.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}


                   {project.database && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Database:</h2>
                    {project.database.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}

                     {project.orm && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">ORM:</h2>
                    {project.orm.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}

                   {project.tools && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Tools:</h2>
                    {project.tools.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}

                   {project.deployment && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Deployment:</h2>
                    {project.deployment.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}
                    
    
                  </CardContent>
                </Card>
              </div>
              <Hero imageLink={project.imageUrl} title={project.title} />
                      <div className="md:w-[40%] w-full mb-5 mt-10 mr-10 md:hidden px-2">

                <Card className="dark:bg-[#09090b] h-full w-full bg-[#EEEEFF]">
                  <CardHeader>
                    <CardTitle className="text-3xl dark:text-gray-300 font-extrabold">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-5 flex-col">
                   {project.frontend && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Frontend:</h2>
                    {project.frontend.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}


                   {project.backend && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Backend:</h2>
                    {project.backend.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}


                   {project.database && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Database:</h2>
                    {project.database.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}

                   {project.orm && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">ORM:</h2>
                    {project.orm.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}

                   {project.tools && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Tools:</h2>
                    {project.tools.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}

                   {project.deployment && <div className="flex gap-1">
                    <h2 className="dark:text-gray-200 font-bold">Deployment:</h2>
                    {project.deployment.map((item,index)=>{
                       return <Badge className={'px-2 '} variant={'outline'} key={index}>{item}</Badge>
                    })}
                    </div>}
                    
    
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
