import React from 'react'
import { Card } from '@/components/ui/card'
import { Trophy, Users, Sparkles } from 'lucide-react'

const AchievementsSection = () => {
  return (
    <div id="achievements" className="border-dotted py-14 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Title */}
        <h2 className="text-3xl pt-5 text-center md:text-5xl pb-10 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          Achievements
        </h2>

        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-violet-500/15 to-purple-500/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

          <Card className="relative dark:bg-gray-900/80 bg-white backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 group-hover:border-purple-400/50 dark:group-hover:border-purple-500/50 transition-all duration-300 overflow-hidden">

            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500" />

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">

              {/* Icon badge */}
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 shadow-md shadow-purple-500/20 dark:shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <Trophy className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    Blostem AI Builder Hackathon
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/50">
                    <Sparkles className="h-3 w-3" />
                    Hack to the Future
                  </span>
                </div>

                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">May 2026</p>

                <p className="text-sm sm:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
                  Shortlisted among <strong>45 participants from 647+ applicants</strong> for Blostem's flagship AI Builder Hackathon. Built and shipped a working AI product end-to-end under mentorship, from concept to a deployed demo, in a high-pressure, fast-iteration environment.
                </p>

                {/* Stat row */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
                    <Users className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Top <span className="text-blue-600 dark:text-blue-400">~7%</span> of 647+ applicants
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60">
                    <Trophy className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      45 shortlisted participants
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </Card>
        </div>

      </div>
    </div>
  )
}

export default AchievementsSection