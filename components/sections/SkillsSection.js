import React, { useState } from 'react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "⬡",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "RTK Query", "GSAP"],
  },
  {
    title: "Backend Development",
    icon: "⬡",
    skills: ["Node.js", "Express.js", "REST API Development", "API Design & Optimization", "Authentication & Authorization (JWT, OAuth 2.0, RBAC)", "Rate Limiting"],
  },
  {
    title: "Database & Caching",
    icon: "⬡",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis (Caching, Pub/Sub)", "Query Optimization"],
  },
  {
    title: "Cloud & Deployment",
    icon: "⬡",
    skills: ["AWS (EC2, S3, IAM, Lightsail)", "Vercel", "Render", "Docker"],
  },
  {
    title: "Real-Time Systems",
    icon: "⬡",
    skills: ["WebSockets", "Socket.io"],
  },
  {
    title: "Event-Driven & Async",
    icon: "⬡",
    skills: ["Inngest (Queue System, Background Jobs)", "Event-Driven Architecture", "Asynchronous Processing"],
  },
  {
    title: "AI & Integrations",
    icon: "⬡",
    skills: ["OpenAI API", "Gemini API", "Generative AI (LLMs)", "Razorpay", "Cloudinary", "Vonage API"],
  },
  {
    title: "Tools & Technologies",
    icon: "⬡",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Shell Scripting"],
  },
  {
    title: "Core Concepts",
    icon: "⬡",
    skills: ["Data Structures & Algorithms", "System Design", "Microservices Fundamentals", "REST & WebSocket Architecture"],
  },
];

// Assign a span class based on skill count for smart layout
const getColSpan = (count) => {
  if (count <= 3) return "lg:col-span-1";
  if (count <= 5) return "lg:col-span-1";
  return "lg:col-span-1";
};

const SkillCard = ({ category, index }) => {
  const [hovered, setHovered] = useState(false);

  const accentColors = [
    { border: "hover:border-blue-500/60", glow: "hover:shadow-blue-500/10", tag: "hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400", title: "text-blue-400" },
    { border: "hover:border-violet-500/60", glow: "hover:shadow-violet-500/10", tag: "hover:bg-violet-500/10 hover:border-violet-500/50 hover:text-violet-400", title: "text-violet-400" },
    { border: "hover:border-cyan-500/60", glow: "hover:shadow-cyan-500/10", tag: "hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400", title: "text-cyan-400" },
    { border: "hover:border-emerald-500/60", glow: "hover:shadow-emerald-500/10", tag: "hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400", title: "text-emerald-400" },
    { border: "hover:border-amber-500/60", glow: "hover:shadow-amber-500/10", tag: "hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-400", title: "text-amber-400" },
    { border: "hover:border-rose-500/60", glow: "hover:shadow-rose-500/10", tag: "hover:bg-rose-500/10 hover:border-rose-500/50 hover:text-rose-400", title: "text-rose-400" },
    { border: "hover:border-sky-500/60", glow: "hover:shadow-sky-500/10", tag: "hover:bg-sky-500/10 hover:border-sky-500/50 hover:text-sky-400", title: "text-sky-400" },
    { border: "hover:border-indigo-500/60", glow: "hover:shadow-indigo-500/10", tag: "hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-400", title: "text-indigo-400" },
    { border: "hover:border-teal-500/60", glow: "hover:shadow-teal-500/10", tag: "hover:bg-teal-500/10 hover:border-teal-500/50 hover:text-teal-400", title: "text-teal-400" },
  ];

  const accent = accentColors[index % accentColors.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative rounded-xl p-5
        bg-gray-950/60 dark:bg-gray-900/50 bg-white/60
        border border-gray-200 dark:border-gray-700/50
        ${accent.border}
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl ${accent.glow}
        overflow-hidden
        flex flex-col gap-4
      `}
    >
      {/* Subtle top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${accent.title}`} />

      {/* Header */}
      <div className="flex items-center gap-2">
        <h3 className={`text-[15px] font-semibold tracking-wide ${accent.title} dark:${accent.title}`}>
          {category.title}
        </h3>
        
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIdx) => (
          <span
            key={skillIdx}
            className={`
              px-3 py-1.5 text-[12.5px] font-medium rounded-md
              dark:bg-gray-800/70 bg-gray-100/80
              dark:text-gray-300 text-gray-600
              border dark:border-gray-700/70 border-gray-200
              ${accent.tag}
              transition-all duration-200
              hover:scale-[1.04]
              cursor-default
              leading-none
            `}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div id="skills" className="border-dotted py-14 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Title */}
        <h2 className="text-3xl pt-5 text-center md:text-5xl pb-10 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          Skills
        </h2>

        {/* Responsive Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {skillCategories.map((category, index) => (
            <div key={index} className="break-inside-avoid">
              <SkillCard category={category} index={index} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkillsSection;