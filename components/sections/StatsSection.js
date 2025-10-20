import React from 'react'

const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Projects", icon: "📦" },
    { number: "500+", label: "Github Commits", icon: "⚡" },
    { number: "200+", label: "DSA Problems", icon: "🧩" },
    { number: "10+", label: "Technologies", icon: "⚙️" },
  ]

  return (
    <div id="stats" className="border-dotted py-16 border-b border-gray-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl pt-5 text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent pr-2">
          Impact In Numbers
        </h2>
          <p className="text-gray-400 text-lg">Building, solving, and shipping consistently</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-300">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full border border-gray-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection