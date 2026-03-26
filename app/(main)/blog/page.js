"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Zap, Database, CreditCard, Bot,
  TrendingUp, Lightbulb, Users, IndianRupee, Activity,
} from "lucide-react";

// ── Animated Counter Hook ──
function useAnimatedCounter(target, duration = 2000, loop = true) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
        if (loop) {
          setTimeout(() => {
            startTimeRef.current = null;
            setValue(0);
            rafRef.current = requestAnimationFrame(animate);
          }, 1800);
        }
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, loop]);

  return value;
}

// ── Inline LMP Stats ──
const LMPStats = () => {
  const signups = useAnimatedCounter(1800, 2200, true);
  const revenue = useAnimatedCounter(7500, 2600, true);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {/* Signups */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/60 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800/40 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center">
            <Users className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">
            Total Signups
          </span>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-extrabold tabular-nums text-blue-700 dark:text-blue-300 leading-none">
            {signups.toLocaleString()}
          </span>
          <span className="text-xl font-bold text-blue-500 dark:text-blue-400 mb-0.5">+</span>
        </div>
        <p className="mt-1.5 text-[12px] text-blue-500/70 dark:text-blue-400/60">CBSE students on platform</p>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-blue-200 dark:border-blue-700/30 opacity-40" />
      </div>

      {/* Revenue */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/60 dark:to-emerald-900/30 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center">
            <IndianRupee className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
            Revenue Earned
          </span>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-[22px] font-bold text-emerald-600 dark:text-emerald-400 leading-none mb-0.5">₹</span>
          <span className="text-4xl font-extrabold tabular-nums text-emerald-700 dark:text-emerald-300 leading-none">
            {revenue.toLocaleString()}
          </span>
          <span className="text-xl font-bold text-emerald-500 dark:text-emerald-400 mb-0.5">+</span>
        </div>
        <p className="mt-1.5 text-[12px] text-emerald-500/70 dark:text-emerald-400/60">From Pro plan subscriptions</p>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-emerald-200 dark:border-emerald-700/30 opacity-40" />
      </div>

      {/* Live Status */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/60 dark:to-violet-900/30 border border-violet-200 dark:border-violet-800/40 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-violet-500/10 dark:bg-violet-400/10 flex items-center justify-center">
            <Activity className="h-3.5 w-3.5 text-violet-500 dark:text-violet-400" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500 dark:text-violet-400">
            Status
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500" />
          </span>
          <span className="text-2xl font-extrabold text-violet-700 dark:text-violet-300">Live</span>
        </div>
        <p className="mt-1.5 text-[12px] text-violet-500/70 dark:text-violet-400/60">Production deployed &amp; running</p>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-violet-200 dark:border-violet-700/30 opacity-40" />
      </div>
    </div>
  );
};

// ── Reusable section card ──
const SectionCard = ({ color = "blue", icon: Icon, title, children }) => {
  const borderMap = {
    blue:    "border-blue-200 dark:border-blue-800/40",
    violet:  "border-violet-200 dark:border-violet-800/40",
    emerald: "border-emerald-200 dark:border-emerald-800/40",
    amber:   "border-amber-200 dark:border-amber-800/40",
    rose:    "border-rose-200 dark:border-rose-800/40",
    cyan:    "border-cyan-200 dark:border-cyan-800/40",
  };
  const iconMap = {
    blue:    "text-blue-500 dark:text-blue-400",
    violet:  "text-violet-500 dark:text-violet-400",
    emerald: "text-emerald-500 dark:text-emerald-400",
    amber:   "text-amber-500 dark:text-amber-400",
    rose:    "text-rose-500 dark:text-rose-400",
    cyan:    "text-cyan-500 dark:text-cyan-400",
  };
  const labelMap = {
    blue:    "text-blue-600 dark:text-blue-400",
    violet:  "text-violet-600 dark:text-violet-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber:   "text-amber-600 dark:text-amber-400",
    rose:    "text-rose-600 dark:text-rose-400",
    cyan:    "text-cyan-600 dark:text-cyan-400",
  };
  const dotMap = {
    blue: "bg-blue-500", violet: "bg-violet-500", emerald: "bg-emerald-500",
    amber: "bg-amber-500", rose: "bg-rose-500", cyan: "bg-cyan-500",
  };

  return (
    <div className={`bg-white dark:bg-gray-900/80 border ${borderMap[color]} rounded-2xl p-5 backdrop-blur-sm`}>
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotMap[color]}`} />
        {Icon && <Icon className={`h-4 w-4 ${iconMap[color]}`} />}
        <h3 className={`text-[11px] font-bold uppercase tracking-wider ${labelMap[color]}`}>{title}</h3>
      </div>
      {children}
    </div>
  );
};

// ── Learn list ──
const LearnList = ({ items, color = "blue" }) => {
  const dotMap = { blue: "bg-blue-500", emerald: "bg-emerald-500", violet: "bg-violet-500", amber: "bg-amber-500" };
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-gray-600 dark:text-gray-300 leading-snug">
          <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotMap[color] || "bg-blue-500"}`} />
          {item}
        </li>
      ))}
    </ul>
  );
};

// ── Flow step ──
const FlowStep = ({ num, text }) => (
  <div className="flex items-start gap-3">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-[11px] font-bold flex items-center justify-center">
      {num}
    </span>
    <span className="text-[13.5px] text-gray-600 dark:text-gray-300 leading-snug pt-0.5">{text}</span>
  </div>
);

// ── Divider ──
const Divider = () => (
  <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600 my-10" />
);

// ── Section heading ──
const SectionHeading = ({ children, sub }) => (
  <div className="mb-6">
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
      {children}
    </h2>
    {sub && <p className="mt-1.5 text-[14px] text-gray-500 dark:text-gray-400">{sub}</p>}
  </div>
);

// ── Main Client Component ──
const BlogContent = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b]">
      <div className="w-full px-4 py-10 md:px-8 lg:px-16 xl:px-24">

        {/* ── PAGE HEADER ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">Developer Journal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent mb-4 pr-2 leading-tight">
            What I&apos;ve Learned
          </h1>
          <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            Over the past few months, I've grown tremendously as a full-stack developer by building and deploying{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">real-world products</span> and gaining valuable{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">industry experience</span>. Three milestones define this chapter — scaling an AI SaaS to 1800+ users, building a real-time MERN chat app, and surviving a live PHP internship.
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />
        </div>

        {/* ══════════════════════════════════════════════════
            SECTION 1 — LMP
        ══════════════════════════════════════════════════ */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
              Featured Project
            </span>
          </div>
          <SectionHeading
            sub="An AI-powered exam preparation platform for CBSE students — built, launched, and scaled to real users."
          >
            LastMinutePreparation — From Idea to 1800+ Users
          </SectionHeading>
          <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
            LMP was built with a clear goal: help students prepare effectively in the last moments before exams using AI.
            This wasn't just a coding project — it was a{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">real product with real users, real traffic, and real revenue</span>.
            From handling performance issues to scaling backend systems and acquiring users organically, LMP taught me what it truly means to build in the real world.
          </p>
        </div>

        {/* Inline Animated Stats */}
        <LMPStats />

        {/* Challenge */}
        <div className="mt-8 mb-6">
          <SectionCard color="rose" icon={Zap} title="The Biggest Challenge — Slow AI Responses">
            <p className="text-[13.5px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Initially, the system processed AI requests synchronously — the user sends a request, the backend calls OpenAI, and the response returns after a long delay. This created poor UX and risk of users dropping off.
            </p>
            <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40 rounded-xl p-3 mb-1">
              <p className="text-[12px] font-semibold text-rose-600 dark:text-rose-400 italic">
                "Real-world systems fail differently than local projects."
              </p>
            </div>
          </SectionCard>
        </div>

        {/* Breakthrough */}
        <div className="mb-6">
          <SectionCard color="blue" icon={Zap} title="The Breakthrough — Queue-Based Architecture">
            <p className="text-[13.5px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Redesigned the system using asynchronous processing: introduced <span className="font-semibold text-gray-700 dark:text-gray-200">Inngest</span> as a queue system, moved AI processing to background jobs, and implemented frontend polling for results.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                "User sends request",
                "Backend pushes job to queue",
                "Inngest processes AI task in background",
                "OpenAI generates response",
                "Frontend fetches result via polling",
              ].map((step, i) => <FlowStep key={i} num={i + 1} text={step} />)}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Faster perceived performance", "Better scalability", "Smooth user experience"].map((tag, i) => (
                <span key={i} className="px-2 py-1 text-[11px] font-medium text-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* 3-col: Caching + Payment + AI */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <SectionCard color="cyan" icon={Database} title="Performance — Redis Caching">
            <LearnList color="blue" items={[
              "Redis (Upstash) for caching frequent responses",
              "Reduced OpenAI API calls significantly",
              "Faster response times & lower costs",
            ]} />
          </SectionCard>
          <SectionCard color="emerald" icon={CreditCard} title="Monetization & Access Control">
            <LearnList color="emerald" items={[
              "Razorpay payment gateway integration",
              "JWT-based auth + rate limiting",
              "Free → Pro tier with auto-downgrade after 30 days",
            ]} />
          </SectionCard>
          <SectionCard color="violet" icon={Bot} title="AI Features Built">
            <LearnList color="violet" items={[
              "Topper-style answer generation",
              "Topic summarization",
              "Smart question solving",
              "Chat with PDF",
              "Diagram explanation (GPT-4o mini / GPT-5.1 Pro)",
            ]} />
          </SectionCard>
        </div>

        {/* LMP Learnings */}
        <SectionCard color="amber" icon={TrendingUp} title="What LMP Taught Me">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <LearnList color="amber" items={[
              "Designing scalable backends using queue systems",
              "Handling async workflows in production",
              "Redis caching for performance optimization",
            ]} />
            <LearnList color="amber" items={[
              "Building and monetizing a real SaaS product",
              "Organic user acquisition through Instagram Reels",
              "Solving latency, API limits & user retention issues",
            ]} />
          </div>
        </SectionCard>

        <Divider />

        {/* ══════════════════════════════════════════════════
            SECTION 2 — MERN Chat App
        ══════════════════════════════════════════════════ */}
        <SectionHeading
          sub="A production-ready real-time messaging platform built with MongoDB, Express, React, Node.js, and Socket.io."
        >
          MERN Chat App — Real-Time Communication at Scale
        </SectionHeading>

        <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          I wanted this to feel like a professional, scalable messaging app — not just a demo. The core challenge was implementing
          real-time communication without delays, alongside{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-200">typing indicators, read receipts, file uploads, JWT auth,</span>{" "}
          and a smooth responsive frontend. Debugging real-time Socket.io events, handling CORS, and maintaining database sync under load were the biggest growth moments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <SectionCard color="blue" title="Tech Stack">
            <div className="flex flex-wrap gap-1.5">
              {["MongoDB", "Express.js", "React + Vite", "Node.js", "Socket.io", "JWT", "Multer", "Cloudinary", "Render"].map((t, i) => (
                <span key={i} className="px-2.5 py-1 text-[11.5px] font-medium rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 text-gray-700 dark:text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </SectionCard>
          <SectionCard color="violet" title="What I Learned">
            <LearnList color="violet" items={[
              "Socket.io for bidirectional real-time communication",
              "Secure JWT auth with role-based access",
              "Efficient data modeling with MongoDB + Mongoose",
              "Media uploads via Multer & Cloudinary",
              "Deployment, CORS, and sync challenges on Render",
            ]} />
          </SectionCard>
        </div>

        <Divider />

        {/* ══════════════════════════════════════════════════
            SECTION 3 — Internship
        ══════════════════════════════════════════════════ */}
        <SectionHeading
          sub="Joining a live production codebase, learning PHP in 3 days, and deploying a real eCommerce platform."
        >
          Internship — From Zero PHP to Live Production
        </SectionHeading>

        <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          During my internship I was challenged to learn PHP in just 3 days and immediately work on a live{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-200">React + PHP eCommerce project</span> deployed via cPanel.
          I had to understand legacy backend logic, debug broken API endpoints, configure domains and SSL, and push production updates independently.
          Through constant trial and error, I improved performance, backend security, and deployment workflows — while keeping the live site running.
        </p>

        <SectionCard color="emerald" title="What I Learned">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <LearnList color="emerald" items={[
              "Learning PHP from scratch in 3 days under pressure",
              "Integrating PHP backend with a React frontend",
            ]} />
            <LearnList color="emerald" items={[
              "Debugging large codebases and understanding legacy structure",
              "cPanel deployments, database config, and SSL management",
            ]} />
          </div>
        </SectionCard>

        <Divider />

        {/* ══════════════════════════════════════════════════
            CONCLUSION
        ══════════════════════════════════════════════════ */}
        <div>
          <SectionCard color="amber" icon={Lightbulb} title="My Journey Forward">
            <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              These experiences changed how I think as a developer. I'm no longer just building features — I'm building{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-100">systems that scale, perform, and generate real impact</span>.
              LMP wasn't just a project — it was a product used by real users, a system that handled real challenges, and a journey that taught me more than any course ever could.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {["Advanced backend engineering", "System design at scale", "AI-powered applications"].map((goal, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                  {goal}
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

      </div>
    </div>
  );
};

export default BlogContent;