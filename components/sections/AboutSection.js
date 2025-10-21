import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { BadgeCheck, CircleDot, GraduationCap, School, Code2 } from 'lucide-react'

const AboutSection = () => {
  return (
    <div id="about" className="border-dotted py-10 border-b border-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          About me
        </h2>

        {/* Introduction Section */}
        <Tabs defaultValue="education" className="py-5">
          <TabsList className="w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-300 dark:border-gray-700 p-1">
            <TabsTrigger 
              className="w-1/2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-md text-gray-700 dark:text-gray-300 font-semibold" 
              value="education"
            >
              Education
            </TabsTrigger>
            <TabsTrigger 
              className="w-1/2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-md text-gray-700 dark:text-gray-300 font-semibold" 
              value="programming"
            >
              Programming Language
            </TabsTrigger>
          </TabsList>
          
          <TabsContent
            className="dark:bg-black/60 bg-slate-300/40 mx-2 p-5 rounded-md dark:text-white"
            value="education"
          >
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <Card className="relative mt-3 border border-gray-600 dark:border-gray-700 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-3 text-2xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-purple-400 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    University
                  </h2>
                  <h3 className="font-semibold md:text-xl text-gray-800 dark:text-gray-200 mb-1">
                    BTech & MTech in Computer Science Engineering
                  </h3>
                  <p className="font-bold text-gray-600 dark:text-gray-400">(2022 - 2027)</p>
                  <p className="text-gray-700 dark:text-gray-400 mb-1 font-semibold">
                    Vellore Institute Of Technology (VIT)
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-400 font-semibold">
                    Bhopal Campus (Madhya Pradesh)
                  </p>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-400 mb-1">
                    CGPA - 8.2
                  </h3>
                </Card>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <Card className="relative mt-3 border border-gray-600 dark:border-gray-700 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 group-hover:border-blue-500/50 transition-all duration-300">
                  <h2 className="flex text-gray-800 items-center gap-2 mb-3 text-2xl dark:text-gray-200 font-bold group-hover:text-blue-400 transition-colors duration-300">
                    <School className="h-7 w-7 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    School
                  </h2>
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">
                    Higher Secondary School
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-1 font-semibold">
                    Chaitanya Keerti School Roopakhedi
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-400 font-semibold">
                    Ujjain (Madhya Pradesh)
                  </p>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-400 mb-1">
                    Class 10th - 90.33%
                  </h3>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-400 mb-1">
                    Class 12th - 81.4%
                  </h3>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            className="dark:bg-black/60 bg-slate-300/40 mx-2 p-5 rounded-md dark:text-white"
            value="programming"
          >
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <Card className="relative mt-3 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-green-500 dark:border-green-600 p-8 group-hover:border-green-400 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-3 text-2xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-green-400 transition-colors duration-300">
                    <BadgeCheck className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
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
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <Card className="relative mt-3 dark:bg-gray-900/80 backdrop-blur-sm border border-yellow-500 rounded-2xl p-8 group-hover:border-yellow-400 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-3 text-2xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-yellow-400 transition-colors duration-300">
                    <CircleDot className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    Familiar With
                  </h2>
                  <li className="font-semibold ml-5 list-disc text-gray-700 dark:text-gray-300 mb-1">
                    Java
                  </li>
                  <li className="font-semibold list-disc ml-5 text-gray-700 dark:text-gray-300 mb-1">
                    TypeScript
                  </li>
                  <li className="font-semibold list-disc ml-5 text-gray-700 dark:text-gray-300 mb-1">
                    R
                  </li>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="max-w-7xl mx-auto mb-10">
          <div className="relative group">
            <div className="absolute  inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <Card className="relative mx-3 dark:bg-gray-900/80 bg-white backdrop-blur-sm border border-gray-600 dark:border-gray-700 rounded-2xl p-4 sm:p-8 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-2 sm:gap-3 mb-4">
                <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    Full-Stack Developer & Scalable Backend Engineer
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    I'm a passionate full-stack developer who doesn't just build websites — I build scalable, high-performance web systems that serve real users.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <span>With 3 months of professional internship experience, I've worked on end-to-end applications using the MERN stack, WebSockets, real-time features and containerised deployments.</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <span>My focus is on backend architecture, performance optimisation, and system design, in addition to clean frontend experiences.</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                      <span>I'm currently pursuing B.Tech & M.Tech (CSE) at VIT Bhopal (2022-27) while actively developing large-scale project applications and preparing for high-impact roles.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection