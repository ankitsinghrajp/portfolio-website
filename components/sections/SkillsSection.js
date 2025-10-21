import React from 'react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "shadcn UI", "Redux Toolkit", "RTK Query"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Socket.io", "Prisma ORM","API Optimization","Authentication & Authorization"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Redis (for caching and Pub/Sub patterns)","Query Optimization"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "Docker", "GSAP", "Postman","VS Code","AI Integration (OpenAI API, generative AI in web apps)","AWS / Render / Vercel (Cloud deployment & CI/CD)","Shell Scripting"]
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "React Async Thunk", "System Design","REST & WebSocket Architecture"]
    }
  ]

  return (
    <div id="skills" className="border-dotted py-10 border-b border-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          Skills
        </h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* First Row - 3 cards */}
            <div className=" dark:bg-gray-900/50 hover:border-blue-500 bg-purple-200/40 rounded-lg p-6 border border-gray-700/50 backdrop-blur-sm  transition-all duration-300 hover:dark:bg-gray-900/70 hover:dark:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold dark:text-blue-400 text-blue-600 mb-4 transition-colors duration-300 hover:text-blue-700">
                {skillCategories[0].title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[0].skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 text-sm font-medium dark:text-gray-300 dark:bg-gray-800/80 hover:text-blue-700 rounded-md border border-gray-700 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-500 dark:hover:text-blue-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className=" dark:bg-gray-900/50 hover:border-blue-500 bg-purple-200/40 rounded-lg p-6 border border-gray-700/50 backdrop-blur-sm  transition-all duration-300 hover:dark:bg-gray-900/70 hover:dark:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold dark:text-blue-400 text-blue-600 mb-4 transition-colors duration-300 hover:text-blue-700">
                {skillCategories[1].title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[1].skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 text-sm font-medium dark:text-gray-300 dark:bg-gray-800/80 hover:text-blue-700 rounded-md border border-gray-700 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-500 dark:hover:text-blue-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className=" dark:bg-gray-900/50 hover:border-blue-500 bg-purple-200/40 rounded-lg p-6 border border-gray-700/50 backdrop-blur-sm  transition-all duration-300 hover:dark:bg-gray-900/70 hover:dark:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold dark:text-blue-400 text-blue-600 mb-4 transition-colors duration-300 hover:text-blue-700">
                {skillCategories[2].title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[2].skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 text-sm font-medium dark:text-gray-300 dark:bg-gray-800/80 hover:text-blue-700 rounded-md border border-gray-700 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-500 dark:hover:text-blue-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Second Row - 2 cards */}
            <div className="lg:col-span-2 dark:bg-gray-900/50 hover:border-blue-500 bg-purple-200/40 rounded-lg p-6 border border-gray-700/50 backdrop-blur-sm  transition-all duration-300 hover:dark:bg-gray-900/70 hover:dark:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold dark:text-blue-400 text-blue-600 mb-4 transition-colors duration-300 hover:text-blue-700">
                {skillCategories[3].title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[3].skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 text-sm font-medium dark:text-gray-300 dark:bg-gray-800/80 hover:text-blue-700 rounded-md border border-gray-700 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-500 dark:hover:text-blue-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className=" dark:bg-gray-900/50 hover:border-blue-500 bg-purple-200/40 rounded-lg p-6 border border-gray-700/50 backdrop-blur-sm  transition-all duration-300 hover:dark:bg-gray-900/70 hover:dark:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
              <h3 className="text-xl font-semibold dark:text-blue-400 text-blue-600 mb-4 transition-colors duration-300 hover:text-blue-700">
                {skillCategories[4].title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillCategories[4].skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 text-sm font-medium dark:text-gray-300 dark:bg-gray-800/80 hover:text-blue-700 rounded-md border border-gray-700 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-500 dark:hover:text-blue-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default SkillsSection