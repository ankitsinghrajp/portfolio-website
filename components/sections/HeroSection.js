'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const ROLES = [
  'Full-Stack Developer',
  'Backend Engineer',
  'SaaS Product Builder',
  'Software Engineer',
  'Web Application Developer',
]

const ROLE_COLORS = [
  '#b06ef3',
  '#4facfe',
  '#f870a8',
  '#34d399',
  '#fbbf24',
  '#a78bfa',
]

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [phase, setPhase]     = useState('visible') // 'visible' | 'exit' | 'enter'

  useEffect(() => {
    // word stays visible for 2.8s, then we trigger exit
    const t = setTimeout(() => setPhase('exit'), 2800)
    return () => clearTimeout(t)
  }, [roleIdx])

  useEffect(() => {
    if (phase === 'exit') {
      // after 0.35s exit animation, swap word and start enter
      const t = setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length)
        setPhase('enter')
      }, 350)
      return () => clearTimeout(t)
    }
    if (phase === 'enter') {
      // after 0.35s enter animation, mark visible
      const t = setTimeout(() => setPhase('visible'), 350)
      return () => clearTimeout(t)
    }
  }, [phase])

  const wordStyle = {
    display:    'inline-block',
    color:      ROLE_COLORS[roleIdx],
    fontWeight: 700,
    whiteSpace: 'nowrap',
    transition: 'opacity 0.32s ease, transform 0.32s cubic-bezier(.22,1,.36,1)',
    opacity:    phase === 'exit' ? 0 : 1,
    transform:  phase === 'exit'
      ? 'translateY(-10px)'
      : phase === 'enter'
      ? 'translateY(10px)'
      : 'translateY(0)',
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Geist+Mono:wght@300;400;500&display=swap');

        .h-syne    { font-family: 'Syne', sans-serif; }
        .h-cabinet { font-family: 'Cabinet Grotesk', sans-serif; }
        .h-mono    { font-family: 'Geist Mono', monospace; }

        :root {
          --accent-1: #b06ef3;
          --accent-2: #f870a8;
          --accent-3: #4facfe;
          --text-hi:  #f5f2ff;
          --text-mid: #9691a8;
          --text-lo:  #42404e;
          --border:   rgba(255,255,255,0.07);
          --surface:  rgba(255,255,255,0.035);
        }

        /* ── Entrance ── */
        @keyframes revealUp {
          from { opacity:0; transform:translateY(32px) skewY(1.2deg); }
          to   { opacity:1; transform:translateY(0) skewY(0); }
        }
        @keyframes revealFade { from{opacity:0} to{opacity:1} }
        @keyframes revealScale {
          from { opacity:0; transform:scale(0.87) rotate(-2deg); }
          to   { opacity:1; transform:scale(1) rotate(0); }
        }
        @keyframes lineExpand {
          from { transform:scaleX(0); transform-origin:left; }
          to   { transform:scaleX(1); transform-origin:left; }
        }
        @keyframes badgeDrop {
          0%  { opacity:0; transform:translateY(-12px) scale(0.88); }
          60% { transform:translateY(3px) scale(1.03); }
          100%{ opacity:1; transform:translateY(0) scale(1); }
        }

        /* ── Looping ── */
        @keyframes shimmerText {
          0%   { background-position:-300% center; }
          100% { background-position: 300% center; }
        }
        @keyframes auroraPulse {
          0%,100%{ opacity:.22; transform:scale(1) rotate(0deg); }
          33%    { opacity:.38; transform:scale(1.1) rotate(4deg); }
          66%    { opacity:.28; transform:scale(.95) rotate(-3deg); }
        }
        @keyframes floatY {
          0%,100%{ transform:translateY(0); }
          50%    { transform:translateY(-11px); }
        }
        @keyframes ringRotate    { from{transform:rotate(0)}   to{transform:rotate(360deg)} }
        @keyframes ringRotateRev { from{transform:rotate(0)}   to{transform:rotate(-360deg)} }
        @keyframes dotPulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(52,211,153,.55); }
          50%    { box-shadow:0 0 0 5px rgba(52,211,153,0); }
        }
        @keyframes tickerSlide {
          from{ transform:translateX(0); }
          to  { transform:translateX(-50%); }
        }
        @keyframes scanLine {
          0%  { top:-6%; opacity:0; }
          5%  { opacity:.3; }
          95% { opacity:.3; }
          100%{ top:106%; opacity:0; }
        }

        /* ── Entrance bindings ── */
        .e-badge{ animation:badgeDrop   .6s cubic-bezier(.34,1.56,.64,1) .05s both; }
        .e-l1   { animation:revealUp    .7s cubic-bezier(.22,1,.36,1)    .14s both; }
        .e-l2   { animation:revealUp    .75s cubic-bezier(.22,1,.36,1)   .26s both; }
        .e-l3   { animation:revealUp    .7s cubic-bezier(.22,1,.36,1)    .38s both; }
        .e-line { animation:lineExpand  .8s cubic-bezier(.22,1,.36,1)    .48s both; }
        .e-desc { animation:revealUp    .7s cubic-bezier(.22,1,.36,1)    .52s both; }
        .e-btns { animation:revealUp    .7s cubic-bezier(.22,1,.36,1)    .64s both; }
        .e-soc  { animation:revealFade  .9s ease                         .80s both; }
        .e-img  { animation:revealScale .9s cubic-bezier(.34,1.2,.64,1)  .22s both; }
        .e-stats{ animation:revealFade  .9s ease                         1.0s  both; }

        /* ── Shimmer name ── */
        .name-glow {
          background:linear-gradient(100deg,
            #b06ef3 0%,#f870a8 18%,#fff 36%,
            #4facfe 54%,#b06ef3 72%,#f870a8 90%,#b06ef3 100%);
          background-size:300% auto;
          -webkit-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
          
        }

        /* ── Role clip container ──
           Fixed height = one line. overflow:hidden clips the sliding span.
           No layout shift whatsoever. */
        .role-clip {
          display:inline-block;
          height:1.45em;
          overflow:hidden;
          vertical-align:middle;
          /* min-width keeps the surrounding text stable */
          min-width:18ch;
        }

        /* ── Stat cards ── */
        .stat-pill {
          border:1px solid var(--border);
          background:var(--surface);
          backdrop-filter:blur(12px);
          transition:transform .22s, border-color .22s, box-shadow .22s;
        }
        .stat-pill:hover{
          transform:translateY(-4px);
          border-color:rgba(176,110,243,.4);
          box-shadow:0 12px 28px -8px rgba(176,110,243,.2);
        }

        /* ── Primary button ── */
        .btn-primary{
          position:relative; overflow:hidden;
          background:linear-gradient(135deg,#b06ef3,#f870a8);
          transition:transform .25s, box-shadow .25s;
        }
        .btn-primary::before{
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,#c380ff,#ff85b8);
          opacity:0; transition:opacity .25s;
        }
        .btn-primary:hover{ transform:translateY(-2px) scale(1.03); box-shadow:0 16px 36px -10px rgba(176,110,243,.55); }
        .btn-primary:hover::before{ opacity:1; }
        .btn-primary > *{ position:relative; z-index:1; }

        /* ── Ghost button ── */
        .btn-ghost{
          border:1px solid var(--border);
          background:var(--surface);
          backdrop-filter:blur(10px);
          transition:transform .25s, border-color .25s, color .25s, box-shadow .25s;
        }
        .btn-ghost:hover{
          transform:translateY(-2px) scale(1.03);
          border-color:rgba(176,110,243,.5);
          box-shadow:0 10px 28px -8px rgba(176,110,243,.18);
        }

        /* ── Social ── */
        .soc-icon{
          border:1px solid var(--border);
          background:var(--surface);
          transition:transform .2s, border-color .2s, box-shadow .2s, color .2s;
        }
        .soc-icon:hover{ transform:translateY(-3px) scale(1.12); }

        /* ── Image rings ── */
        .img-float  { animation:floatY 5s ease-in-out infinite; }
        .img-ring-1 { border:1px dashed rgba(176,110,243,.25); animation:ringRotate    28s linear infinite; }
        .img-ring-2 { border:1px solid  rgba(248,112,168,.18); animation:ringRotateRev 18s linear infinite; }
        .img-ring-3 { border:1px dashed rgba(79,172,254,.18);  }
        .img-grad-border{
          padding:2.5px; border-radius:9999px;
          background:conic-gradient(from 180deg,#b06ef3,#f870a8,#4facfe,#b06ef3);
        
        }
        .img-scan::after{
          content:''; position:absolute; left:0; right:0; height:30%;
          background:linear-gradient(to bottom,transparent,rgba(176,110,243,.06),transparent);
          animation:scanLine 4s ease-in-out infinite;
          pointer-events:none; border-radius:9999px;
        }

        /* ── Ticker ── */
        .ticker-track{ animation:tickerSlide 22s linear infinite; white-space:nowrap; }

        /* ── Aurora ── */
        .aurora-1{ animation:auroraPulse  8s ease-in-out infinite; }
        .aurora-2{ animation:auroraPulse 11s ease-in-out infinite 2.5s; }
        .aurora-3{ animation:auroraPulse  9s ease-in-out infinite 5s; }

        /* ── Misc ── */
        .avail-dot { animation:dotPulse 2.2s ease infinite; }
        .console-tag{ border:1px solid rgba(176,110,243,.22); background:rgba(176,110,243,.07); }
        .noise-layer{
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events:none;
        }
        .grid-bg{
          background-image:
            linear-gradient(rgba(176,110,243,.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(176,110,243,.04) 1px,transparent 1px);
          background-size:56px 56px;
        }
        .grid-fade{
          background:linear-gradient(to bottom,#05050a 0%,transparent 15%,transparent 85%,#05050a 100%);
        }
      `}</style>

      <section className="h-syne relative min-h-screen overflow-hidden" style={{ background:'#05050a' }}>

        {/* Layers */}
        <div className="noise-layer absolute inset-0 z-0 pointer-events-none opacity-60" />
        <div className="grid-bg absolute inset-0 z-0 pointer-events-none" />
        <div className="grid-fade absolute inset-0 z-0 pointer-events-none" />

        {/* Aurora blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="aurora-1 absolute -top-32 right-[-8%] w-[600px] h-[600px] rounded-full
                          bg-gradient-to-bl from-violet-600/30 via-purple-700/15 to-transparent blur-[90px]" />
          <div className="aurora-2 absolute top-[40%] -left-24 w-[500px] h-[500px] rounded-full
                          bg-gradient-to-tr from-blue-600/20 via-cyan-700/10 to-transparent blur-[80px]" />
          <div className="aurora-3 absolute bottom-[-10%] right-[20%] w-[420px] h-[420px] rounded-full
                          bg-gradient-to-tl from-pink-600/20 via-rose-700/10 to-transparent blur-[70px]" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between
                        min-h-screen
                        px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28
                        pt-20 pb-10 lg:py-0
                        gap-14 lg:gap-8 max-w-[1400px] mx-auto">

          {/* ════ LEFT ════ */}
          <div className="w-full lg:flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Console badge */}
            <div className="e-badge h-mono console-tag inline-flex items-center gap-2
                            px-3.5 py-1.5 rounded-md mb-6 self-center lg:self-start">
              <span className="text-[10px] tracking-widest uppercase" style={{ color:'rgba(176,110,243,.7)' }}>
                ~/portfolio
              </span>
              <span style={{ color:'var(--text-lo)' }}>›</span>
              <span className="avail-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background:'#34d399' }} />
              <span className="text-[10px] tracking-widest uppercase" style={{ color:'#34d399' }}>
                open for projects
              </span>
            </div>

            {/* Greeting */}
            <p className="e-l1 h-mono text-[11px] sm:text-xs tracking-[0.26em] uppercase mb-3"
               style={{ color:'var(--text-lo)' }}>
              <span style={{ color:'var(--accent-1)' }}>//</span> hello This is
            </p>

            {/* Name */}
            <h1 className="e-l2 leading-[0.96] tracking-[-0.03em] mb-4"
                style={{ fontWeight:700, fontSize:'clamp(2.8rem,7.5vw,5.2rem)' }}>
              <span className="name-glow">Ankit Singh</span>
              <br />
              <span style={{ color:'var(--text-hi)' }}>Chouhan.</span>
            </h1>

            {/* ── Role line with JS cycler ── */}
            <div className="e-l3 flex items-center flex-wrap gap-x-2 mb-6
                            justify-center lg:justify-start"
                 style={{ fontSize:'clamp(.9rem,2vw,1.1rem)', lineHeight:'1.5em' }}>
              <span style={{ color:'var(--text-mid)', fontWeight:500 }}>I am a</span>
              {/*
                role-clip: fixed height + overflow:hidden
                The inner span slides in/out via JS-driven inline styles.
                Layout never shifts because the container height is locked.
              */}
              <span className="role-clip">
                <span style={wordStyle}>{ROLES[roleIdx]}</span>
              </span>
            </div>

            {/* Divider */}
            <div className="e-line h-[2px] w-12 rounded-full mb-6 self-center lg:self-start"
                 style={{ background:'linear-gradient(90deg,var(--accent-1),var(--accent-2))' }} />

            {/* Description */}
            <p className="e-desc text-[14px] sm:text-[15px] leading-[1.75] mb-8 max-w-md"
               style={{ color:'var(--text-mid)' }}>
              I craft{' '}
              <span style={{ color:'var(--text-hi)', fontWeight:700 }}>production-ready web apps</span>{' '}
              &amp; scalable systems with{' '}
              <span style={{ color:'var(--text-hi)', fontWeight:700 }}>
                Node.js · Next.js · React · Socket.io
              </span>{' '}
              — from{' '}
              <span style={{ color:'var(--accent-1)', fontWeight:600 }}>zero to shipped</span>
              , real users, real revenue.
            </p>

            {/* CTAs */}
            <div className="e-btns flex flex-wrap justify-center lg:justify-start gap-3 mb-10 w-full sm:w-auto">
              <a href="/ankits-resume-updated-april-2026.pdf" download
                 className="btn-primary inline-flex items-center gap-2.5
                            px-6 py-3 rounded-xl text-white text-[13.5px] font-bold tracking-wide">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
                </svg>
                <span>Download Resume</span>
              </a>

              <Link href="#projects">
                <span className="btn-ghost inline-flex items-center gap-2.5
                                 px-6 py-3 rounded-xl cursor-pointer
                                 text-[13.5px] font-bold tracking-wide"
                      style={{ color:'var(--text-hi)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  View Projects
                </span>
              </Link>

              <Link href="#contact">
                <span className="btn-ghost inline-flex items-center gap-2.5
                                 px-6 py-3 rounded-xl cursor-pointer
                                 text-[13.5px] font-bold tracking-wide"
                      style={{ color:'var(--text-hi)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Let&apos;s Talk
                </span>
              </Link>
            </div>

            {/* Socials */}
            <div className="e-soc flex items-center gap-3 justify-center lg:justify-start">
              <span className="h-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color:'var(--text-lo)' }}>connect</span>
              <div className="h-px w-5" style={{ background:'var(--border)' }} />
              {[
                {
                  label:'GitHub', href:'https://github.com/ankitsinghrajp',
                  hoverColor:'#fff', hoverBorder:'rgba(255,255,255,.35)',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  label:'LinkedIn', href:'https://www.linkedin.com/in/ankit-singh-chouhan-6612bb252',
                  hoverColor:'#60a5fa', hoverBorder:'rgba(96,165,250,.4)',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label:'X', href:'https://x.com/AnkitSingh84347',
                  hoverColor:'#e2e8f0', hoverBorder:'rgba(226,232,240,.3)',
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, hoverColor, hoverBorder, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   aria-label={label}
                   className="soc-icon w-9 h-9 rounded-xl flex items-center justify-center"
                   style={{ color:'var(--text-mid)' }}
                   onMouseEnter={e => {
                     e.currentTarget.style.color = hoverColor
                     e.currentTarget.style.borderColor = hoverBorder
                     e.currentTarget.style.boxShadow = `0 6px 20px -4px ${hoverBorder}`
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.color = 'var(--text-mid)'
                     e.currentTarget.style.borderColor = 'var(--border)'
                     e.currentTarget.style.boxShadow = 'none'
                   }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ════ RIGHT ════ */}
         <div className="e-img w-full lg:w-auto lg:flex-shrink-0 flex flex-col items-center gap-6">

            {/* Profile frame */}
            <div className="relative flex items-center justify-center"
                 style={{ width:300, height:300 }}>

              <div className="img-ring-3 absolute rounded-full" style={{ inset:-18 }} />
              <div className="img-ring-1 absolute rounded-full" style={{ inset:-4 }}>
                {[0].map(deg => (
                  <div key={deg} className="absolute w-2 h-2 rounded-full"
                       style={{
                         background: deg%120===0 ? 'var(--accent-1)' : deg%60===0 ? 'var(--accent-2)' : 'var(--accent-3)',
                         boxShadow:  `0 0 8px 2px ${deg%120===0 ? 'rgba(176,110,243,.7)' : 'rgba(248,112,168,.6)'}`,
                         top:'50%', left:'50%',
                         transform:`rotate(${deg}deg) translateX(148px) translateX(-50%) translateY(-50%)`,
                       }} />
                ))}
              </div>
              <div className="img-ring-2 absolute rounded-full" style={{ inset:12 }} />

              <div className="aurora-1 absolute rounded-full blur-2xl"
                   style={{
                     inset:28,
                     background:'radial-gradient(ellipse,rgba(176,110,243,.35) 0%,rgba(248,112,168,.2) 50%,transparent 80%)',
                   }} />

              <div className="img absolute rounded-full overflow-hidden"
                   style={{ inset:2.5, zIndex:2, pointerEvents:'none' }} />

              <div className="img-grad-border" style={{ position:'relative', zIndex:1 }}>
                <div className="rounded-full p-[3px]" style={{ background:'#05050a' }}>
                  <Image src="/myprofile.jpeg" width={800} height={800}
                         alt="Ankit Singh Chouhan" priority
                         className="rounded-full object-cover"
                         style={{ width:220, height:220 }} />
                </div>
              </div>

              {/* Floating tags */}
              <div className="e-badge absolute -top-2 -right-3 h-mono
                              px-2.5 py-1 rounded-lg text-[10px] tracking-widest uppercase"
                   style={{ color:'var(--accent-3)', border:'1px solid rgba(79,172,254,.25)', background:'rgba(79,172,254,.07)' }}>
                &lt;Builder /&gt;
              </div>
              <div className="e-badge absolute -bottom-2 -left-4 h-mono
                              px-2.5 py-1 rounded-lg text-[10px] tracking-widest uppercase"
                   style={{ color:'var(--accent-2)', border:'1px solid rgba(248,112,168,.25)', background:'rgba(248,112,168,.07)', animationDelay:'0.15s' }}>
                $ Shipped
              </div>
            </div>

            {/* Stats */}
            <div className="e-stats grid grid-cols-3 gap-2.5" style={{ width:300 }}>
              {[
                { val:'1800', sup:'+', label:'LMP Users',   accent:'var(--accent-1)' },
                { val:'₹7.5', sup:'k', label:'LMP Revenue', accent:'var(--accent-2)' },
                { val:'20',   sup:'+', label:'Live Apps',   accent:'var(--accent-3)' },
              ].map(({ val, sup, label, accent }) => (
                <div key={label} className="stat-pill flex flex-col items-center justify-center py-4 rounded-2xl">
                  <span className="h-cabinet font-black leading-none text-xl sm:text-2xl"
                        style={{ color:'var(--text-hi)' }}>
                    {val}<span style={{ color:accent }}>{sup}</span>
                  </span>
                  <span className="h-mono text-[9.5px] mt-1.5 tracking-wide uppercase text-center"
                        style={{ color:'var(--text-lo)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech ticker */}
            <div className="e-stats overflow-hidden rounded-xl py-2.5"
                 style={{ width:300, border:'1px solid var(--border)', background:'var(--surface)', backdropFilter:'blur(10px)' }}>
              <div className="ticker-track inline-flex gap-5 px-4">
                {['Node.js','Next.js','React','Socket.io','TypeScript','PostgreSQL','Redis','Docker','Prisma','Tailwind',
                  'Node.js','Next.js','React','Socket.io','TypeScript','PostgreSQL','Redis','Docker','Prisma','Tailwind']
                  .map((t, i) => (
                  <span key={i} className="h-mono text-[10px] tracking-wider uppercase flex-shrink-0"
                        style={{ color: i%5===0?'var(--accent-1)':i%5===1?'var(--accent-2)':i%5===2?'var(--accent-3)':'var(--text-mid)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
             style={{ background:'linear-gradient(90deg,transparent,rgba(176,110,243,.3),rgba(248,112,168,.25),transparent)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
             style={{ background:'radial-gradient(circle at bottom left,rgba(79,172,254,.07) 0%,transparent 70%)' }} />
      </section>
    </>
  )
}