import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="dotted-background pt-20 border-dotted border-b border-gray-600 dark:border-gray-600">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col w-full">
          <div className="md:w-[25%] md:hidden">
            <div className="flex justify-center items-center">
              <div className="relative group">
                {/* Animated background gradient with hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-40 group-hover:opacity-60 animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[3px] group-hover:p-[4px] transition-all duration-300">
                  <div className="h-full w-full rounded-full bg-[#eeeeff] dark:bg-[#09090b]"></div>
                </div>
                <Image
                  className="relative rounded-full shadow-md shadow-purple-600/20 group-hover:shadow-purple-600/40 h-60 w-60 group-hover:scale-105 transition-all duration-300"
                  src={"/myprofile.jpeg"}
                  height={800}
                  width={800}
                  alt="profile"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-[75%] mx-5 md:mx-10">
            <div className="flex flex-col mt-20 h-[400px]">
              <h2 className="text-2xl md:font-semibold mb-2 group hover:text-purple-500 transition-colors duration-300 cursor-default">
                Hi There,
              </h2>
              
              <div className="md:text-5xl flex mt-2 text-2xl font-bold">
                I&apos;M
                <div className="words">
                  <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none hover:scale-105 inline-block transition-transform duration-300">
                    Freelancer
                  </span>
                  <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none hover:scale-105 inline-block transition-transform duration-300">
                    System Design Enthusiast
                  </span>
                  <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none hover:scale-105 inline-block transition-transform duration-300">
                    Full Stack Developer
                  </span>
                  <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none hover:scale-105 inline-block transition-transform duration-300">
                    Software Engineer
                  </span>
                  <span className="word md:text-5xl ml-2 font-extrabold text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 cursor-pointer select-none hover:scale-105 inline-block transition-transform duration-300">
                    Scalable Backend Engineer
                  </span>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <p className="relative -mt-40 z-20 text-xl pb-28 dotted-background md:block hidden dark:text-gray-300 text-gray-800 bg-[#eeeeff] dark:bg-[#09090b] group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  "I build production-ready web applications and scalable systems using Node.js, Next.js, React.js & Socket.io & modern infrastructure."
                </p>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <p className="relative z-20 pb-28 dotted-background md:hidden -mt-32 dark:text-gray-300 text-gray-800 bg-[#eeeeff] dark:bg-[#09090b] group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  I&apos;m a passionate Full-Stack Developer who builds responsive,
                  scalable web applications with modern tech and AI integration
                  to create smarter user experiences.
                </p>
              </div>
              
              <div className="-mt-20 z-40 flex items-center gap-5 ml-1 mr-4">
                <div className="relative w-full group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                  <Button
                    variant="outline"
                    className="relative w-full hover:text-white font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-none shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105"
                    asChild
                  >
                    <a href="/ankits-resume-updated-Oct-2025.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
                
                <Link className="w-full" href={'#projects'}>
                  <div className="relative w-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                    <Button
                      variant="outline"
                      className="relative w-full hover:text-white bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-none shadow-lg shadow-slate-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/40 hover:scale-105"
                    >
                      Projects
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-[25%] md:block hidden">
            <div className="flex items-center justify-center h-[400px]">
              <div className="relative group">
                {/* Animated background gradient with hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-40 group-hover:opacity-60 animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[3px] group-hover:p-[4px] transition-all duration-300">
                  <div className="h-full w-full rounded-full bg-[#eeeeff] dark:bg-[#09090b]"></div>
                </div>
                <Image
                  className="relative rounded-full shadow-md shadow-purple-600/20 group-hover:shadow-purple-600/40 h-60 w-60 group-hover:scale-105 transition-all duration-300"
                  src={"/myprofile.jpeg"}
                  height={800}
                  width={800}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection