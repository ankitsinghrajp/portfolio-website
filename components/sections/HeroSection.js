import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');

        .hero-jakarta  { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-serif    { font-family: 'Instrument Serif', serif; }

        /* ── Entrance animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.7) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── Looping effects ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.07); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.15; }
        }

        /* ── Word cycling ──
           Each word is visible for 3.2s out of a 20s total cycle (5 words × 4s).
           Keyframe: visible 0-16%, fade out 16-22%, hidden 22-100%.
        */
        @keyframes wordCycle {
          0%    { opacity: 0;   transform: translateY(10px); }
          4%    { opacity: 1;   transform: translateY(0);    }
          16%   { opacity: 1;   transform: translateY(0);    }
          22%   { opacity: 0;   transform: translateY(-10px);}
          100%  { opacity: 0;   transform: translateY(-10px);}
        }

        /* ── Entrance class bindings ── */
        .anim-badge   { animation: badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s both; }
        .anim-l1      { animation: fadeUp 0.65s ease 0.18s both; }
        .anim-l2      { animation: fadeUp 0.65s ease 0.32s both; }
        .anim-l3      { animation: fadeUp 0.65s ease 0.46s both; }
        .anim-divider { animation: lineGrow 0.7s ease 0.56s both; transform-origin: left; }
        .anim-desc    { animation: fadeUp 0.65s ease 0.62s both; }
        .anim-btns    { animation: fadeUp 0.65s ease 0.76s both; }
        .anim-social  { animation: fadeUp 0.6s  ease 0.90s both; }
        .anim-img     { animation: scaleIn 0.85s cubic-bezier(0.34,1.1,0.64,1) 0.28s both; }
        .anim-stats   { animation: fadeIn 0.8s ease 1.05s both; }

        /* ── Name shimmer ── */
        .name-shimmer {
          background: linear-gradient(90deg,
            #a78bfa 0%, #f472b6 20%, #818cf8 40%, #c084fc 60%, #f472b6 80%, #a78bfa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        /* ── Word cycle container ── */
        .word-wrap {
          display: inline-block;
          position: relative;
          /* wide enough for longest word; height matches one line */
          width: 260px;
          height: 1.4em;
          vertical-align: bottom;
        }
        @media (min-width: 768px) {
          .word-wrap { width: 340px; }
        }
        .word-wrap span {
          position: absolute;
          left: 0;
          top: 0;
          white-space: nowrap;
          opacity: 0;
          animation: wordCycle 20s ease infinite;
        }
        .word-wrap span:nth-child(1) { animation-delay:  0s; }
        .word-wrap span:nth-child(2) { animation-delay:  4s; }
        .word-wrap span:nth-child(3) { animation-delay:  8s; }
        .word-wrap span:nth-child(4) { animation-delay: 12s; }
        .word-wrap span:nth-child(5) { animation-delay: 16s; }

        /* ── Looping class bindings ── */
        .avail-dot   { animation: dotBlink 2s ease infinite; }
        .orbit-outer { animation: orbitSpin 20s linear infinite; }
        .orbit-inner { animation: orbitSpinReverse 13s linear infinite; }
        .hero-glow   { animation: glowPulse 4s ease-in-out infinite; }

        /* ── Image hover ── */
        .img-hover {
          transition: transform 0.4s cubic-bezier(0.34,1.1,0.64,1);
        }
        .img-hover:hover { transform: scale(1.04) rotate(1deg); }

        /* ── Button shine ── */
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.16) 50%, transparent 70%);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }
        .btn-shine:hover::after { left: 130%; }

        /* ── Stat card ── */
        .stat-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .stat-card:hover { transform: translateY(-3px); }

        /* ── Noise overlay ── */
        .hero-wrap::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 1;
        }
      `}</style>

      <section className="hero-wrap hero-jakarta relative min-h-screen overflow-hidden bg-white dark:bg-[#09090b]">

        {/* ── Atmospheric background ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hero-glow absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-600/18 via-pink-500/10 to-transparent blur-3xl" />
          <div className="hero-glow absolute -bottom-40 -left-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-blue-600/12 via-violet-500/8 to-transparent blur-3xl" style={{ animationDelay: '2s' }} />
          <div
            className="absolute inset-0 opacity-[0.022] dark:opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(#7c3aed 1px,transparent 1px),linear-gradient(90deg,#7c3aed 1px,transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between
                        min-h-screen
                        px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28
                        py-14 md:py-0
                        gap-12 md:gap-8">

          {/* ════ LEFT — Text ════ */}
          <div className="w-full md:flex-1 flex flex-col items-center text-center md:items-start md:text-left">

            {/* Available badge */}
            <div className="anim-badge inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full
                            border border-emerald-500/30 bg-emerald-500/8 dark:bg-emerald-500/10 backdrop-blur-sm self-center md:self-start">
              <span className="avail-dot w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
              <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-emerald-600 dark:text-emerald-400">
                Open to opportunities
              </span>
            </div>

            {/* Greeting */}
            <p className="anim-l1 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-gray-400 dark:text-gray-500 mb-3">
              Hello, This is —
            </p>

            {/* Name */}
            <h1 className="anim-l2 font-extrabold leading-[1.02] tracking-tight mb-4
                           text-[2.6rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.6rem]">
              <span className="name-shimmer">Ankit Singh</span>
              <br />
              <span className="text-gray-900 dark:text-white">Chouhan</span>
            </h1>

            {/* Animated role line */}
            <div className="anim-l3 flex items-center justify-center md:justify-start gap-2 mb-5
                            text-sm sm:text-base md:text-lg font-medium">
              <span className="text-gray-400 dark:text-gray-500">I&apos;m a</span>
              <div className="word-wrap text-gray-800 dark:text-gray-100 font-semibold">
                <span>Full Stack Developer</span>
                <span>Backend Engineer</span>
                <span>System Design Enthusiast</span>
                <span>Freelancer</span>
                <span>Software Engineer</span>
              </div>
            </div>

            {/* Divider */}
            <div className="anim-divider h-[2px] w-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-5 self-center md:self-start" />

            {/* Description */}
            <p className="anim-desc text-sm sm:text-[15px] leading-relaxed text-gray-500 dark:text-gray-400
                          max-w-sm sm:max-w-md mb-8">
              I build{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">production-ready web applications</span>{' '}
              and scalable systems using{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">Node.js, Next.js, React &amp; Socket.io</span>{' '}
              — from zero to deployed, with real users and real revenue.
            </p>

            {/* CTA Buttons */}
            <div className="anim-btns flex flex-wrap justify-center md:justify-start items-center gap-3 mb-9 w-full sm:w-auto">
              <a
                href="/ankits-resume-updated-april-2026.pdf"
                download
                className="btn-shine inline-flex items-center gap-2
                           px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl
                           bg-gradient-to-r from-purple-600 to-pink-600
                           text-white text-[13px] sm:text-[13.5px] font-semibold tracking-wide
                           shadow-lg shadow-purple-500/30
                           hover:shadow-purple-500/50 hover:from-purple-700 hover:to-pink-700
                           transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
                </svg>
                Download Resume
              </a>

              <Link href="#projects">
                <span className="btn-shine inline-flex items-center gap-2
                                 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl cursor-pointer
                                 border border-gray-200 dark:border-gray-700
                                 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm
                                 text-gray-700 dark:text-gray-300
                                 text-[13px] sm:text-[13.5px] font-semibold tracking-wide
                                 hover:border-purple-400/60 dark:hover:border-purple-500/50
                                 hover:text-purple-600 dark:hover:text-purple-400
                                 transition-all duration-300 hover:scale-105">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  View Projects
                </span>
              </Link>
            </div>

            {/* Socials */}
            <div className="anim-social flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 font-medium">
                Find me on
              </span>
              <div className="h-px w-6 bg-gray-200 dark:bg-gray-700" />

              {[
                {
                  label: 'GitHub',
                  href: 'https://github.com/ankitsinghrajp',
                  hoverCls: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/ankit-singh-chouhan-6612bb252',
                  hoverCls: 'hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/50',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'X',
                  href: 'https://x.com/AnkitSingh84347',
                  hoverCls: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500',
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, hoverCls, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700/80
                    bg-white dark:bg-white/[0.04] flex items-center justify-center
                    text-gray-500 dark:text-gray-400
                    transition-all duration-200 hover:scale-110 hover:shadow-md
                    ${hoverCls}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Image + Stats ════ */}
          <div className="anim-img w-full md:w-auto md:flex-shrink-0 flex flex-col items-center gap-7">

            {/* Profile image with orbit rings — no badges */}
            <div className="relative flex items-center justify-center
                            w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px]">

              {/* Outer orbit ring */}
              <div className="orbit-outer absolute inset-0 rounded-full
                              border border-dashed border-purple-400/25 dark:border-purple-500/25" />

              {/* Inner orbit ring with glowing dot */}
              <div className="orbit-inner absolute rounded-full border border-pink-400/20 dark:border-pink-500/20"
                   style={{ inset: '18px' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-2.5 h-2.5 rounded-full
                                bg-gradient-to-br from-purple-500 to-pink-500
                                shadow-[0_0_10px_3px_rgba(168,85,247,0.55)]" />
              </div>

              {/* Glow backdrop */}
              <div className="hero-glow absolute rounded-full bg-gradient-to-br
                              from-purple-500/28 via-pink-500/18 to-blue-500/15 blur-2xl"
                   style={{ inset: '30px' }} />

              {/* Gradient ring + photo */}
              <div className="relative p-[3px] rounded-full
                              bg-gradient-to-br from-purple-500 via-pink-400 to-blue-500
                              shadow-2xl shadow-purple-500/30">
                <div className="rounded-full bg-white dark:bg-[#09090b] p-[3px]">
                  <Image
                    className="img-hover rounded-full object-cover
                               w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56"
                    src="/myprofile.jpeg"
                    height={800}
                    width={800}
                    alt="Ankit Singh Chouhan"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="anim-stats grid grid-cols-3 gap-2.5 w-[240px] sm:w-[280px] md:w-[300px]">
              {[
                { value: '1800', sup: '+', label: 'LMP Users',  accent: 'text-purple-500' },
                { value: '₹7.5', sup: 'k', label: 'LMP Revenue',    accent: 'text-pink-500'   },
                { value: '20',    sup: '+', label: 'Live Apps',  accent: 'text-blue-500'   },
              ].map(({ value, sup, label, accent }) => (
                <div
                  key={label}
                  className="stat-card flex flex-col items-center justify-center
                             p-3 rounded-2xl
                             border border-gray-100 dark:border-gray-800
                             bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm shadow-sm"
                >
                  <span className="font-extrabold text-gray-900 dark:text-white leading-none
                                   text-lg sm:text-xl">
                    {value}<span className={accent}>{sup}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 text-center leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
      </section>
    </>
  )
}

export default HeroSection