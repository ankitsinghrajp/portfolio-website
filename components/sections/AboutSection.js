import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { BadgeCheck, CircleDot, GraduationCap, School, Code2 } from 'lucide-react'

const AboutSection = () => {
  return (
    <div id="about" className="border-dotted py-10 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          About Me
        </h2>

        {/* Bio Card */}
        <div className="max-w-7xl mx-auto mb-8">
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
    <Card className="relative mx-0 dark:bg-gray-900/80 bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-7 group-hover:border-blue-400/50 dark:group-hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <Code2 className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
          Full-Stack Developer & Scalable Backend Engineer
        </h3>
      </div>

      <p className="text-sm sm:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        I'm a full-stack developer focused on building scalable, high-performance systems that serve real users, handle real traffic, and solve real problems.
      </p>

      <ul className="space-y-2.5 text-sm sm:text-[15px] text-gray-600 dark:text-gray-300">
        <li className="flex items-start gap-2">
          <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
          <span>
            With <strong>5+ months of internship and project-based experience</strong>, I've developed full-stack applications using <strong>React, Node.js, Next.js</strong>, implemented <strong>WebSockets</strong>, and built <strong>scalable backend systems with queue processing (Inngest)</strong>.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
          <span>
            Built and deployed a production SaaS platform serving <strong>1800+ users</strong>, integrating <strong>OpenAI APIs, Redis caching, rate limiting, and payment systems</strong> with a focus on performance and scalability.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
          <span>
            Passionate about <strong>backend architecture, system design, and AI-powered applications</strong>, while maintaining clean and responsive frontend experiences.
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
          <span>
            Currently pursuing <strong>B.Tech & M.Tech (CSE)</strong> at VIT Bhopal (2022–27), actively building large-scale systems and preparing for high-impact software engineering roles.
          </span>
        </li>
      </ul>
    </Card>
  </div>
</div>

        {/* Tabs */}
        <Tabs defaultValue="education" className="py-2">
          <TabsList className="w-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 p-1 rounded-xl">
            <TabsTrigger
              className="w-1/2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 rounded-lg text-gray-600 dark:text-gray-400 font-semibold text-sm"
              value="education"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              className="w-1/2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 rounded-lg text-gray-600 dark:text-gray-400 font-semibold text-sm"
              value="programming"
            >
              Programming Languages
            </TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent
            className="bg-gray-50/60 dark:bg-black/40 mt-2 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700/50"
            value="education"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
              {/* University */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-pink-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <Card className="relative border border-gray-200 dark:border-gray-700 dark:bg-gray-900/80 bg-white backdrop-blur-sm rounded-2xl p-6 group-hover:border-purple-400/60 dark:group-hover:border-purple-500/50 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-3 text-xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    University
                  </h2>
                  <h3 className="font-semibold text-base text-gray-800 dark:text-gray-200 mb-1">
                    BTech & MTech in Computer Science Engineering
                  </h3>
                  <p className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-2">2022 – 2027</p>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
                    Vellore Institute of Technology (VIT)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Bhopal Campus, Madhya Pradesh</p>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                    CGPA — 7.87
                  </span>
                </Card>
              </div>

              {/* School */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-sky-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <Card className="relative border border-gray-200 dark:border-gray-700 dark:bg-gray-900/80 bg-white backdrop-blur-sm rounded-2xl p-6 group-hover:border-blue-400/60 dark:group-hover:border-blue-500/50 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-3 text-xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    <School className="h-6 w-6 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    School
                  </h2>
                  <h3 className="font-semibold text-base text-gray-800 dark:text-gray-200 mb-1">
                    Higher Secondary School
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
                    Chaitanya Keerti School Roopakhedi
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Ujjain, Madhya Pradesh</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                      Class 10th — 90.33%
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                      Class 12th — 81.4%
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Programming Languages Tab */}
          <TabsContent
            className="bg-gray-50/60 dark:bg-black/40 mt-2 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700/50"
            value="programming"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
              {/* Proficient */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-emerald-500/15 to-teal-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <Card className="relative dark:bg-gray-900/80 bg-white backdrop-blur-sm rounded-2xl border border-green-300 dark:border-green-700/60 p-6 group-hover:border-green-400 dark:group-hover:border-green-500/70 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-4 text-xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    <BadgeCheck className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    Proficient In
                  </h2>
                  <div className="flex flex-wrap gap-2">
                  {["C++", "JavaScript", "TypeScript", "Python","SQL"].map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50 hover:bg-green-100 dark:hover:bg-green-800/40 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Familiar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-orange-500/15 to-amber-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <Card className="relative dark:bg-gray-900/80 bg-white backdrop-blur-sm border border-yellow-300 dark:border-yellow-600/60 rounded-2xl p-6 group-hover:border-yellow-400 dark:group-hover:border-yellow-500/70 transition-all duration-300">
                  <h2 className="flex items-center gap-2 mb-4 text-xl text-gray-800 dark:text-gray-200 font-bold group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    <CircleDot className="h-6 w-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    Familiar With
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {["C", "Java", "PHP"].map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/50 hover:bg-yellow-100 dark:hover:bg-yellow-800/40 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}

export default AboutSection