import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'

const HireMeSection = () => {
  const handleHireMe = () => {
    window.open('mailto:ankitsinghchouhan682@gmail.com?subject=Hiring Inquiry&body=Hi, I\'m interested in hiring you for a project...', '_blank');
  }

  const offerings = [
    "Full-Stack MERN Development",
    "Real-time Features & WebSockets",
    "Backend Architecture & API Design",
    "Performance Optimization"
  ]

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Card */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-700 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900/50 dark:via-blue-900/10 dark:to-purple-900/10 p-8 md:p-12 shadow-xl">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl pb-4 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent">
                Let's Work Together
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can make it happen.
              </p>
              
              {/* Offerings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full max-w-2xl">
                {offerings.map((offering, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {offering}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Button 
                onClick={handleHireMe}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  Hire Me Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              {/* Response Time Badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Usually responds within an hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireMeSection