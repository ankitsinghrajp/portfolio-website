import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import MessageForm from '../message-form'

const ContactSection = () => {
  return (
    <>
      <div id="contact" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center md:text-5xl pb-5 font-extrabold bg-gradient-to-br from-gray-900 via-slate-600 to-gray-900 dark:from-blue-500 dark:via-blue-100 dark:to-blue-400 bg-clip-text tracking-tighter text-transparent">
            Contact Me
          </h2>
          
          <ul className="flex flex-col gap-2">
            {/* Email */}
            <li className="relative group mx-5 m-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative flex items-center gap-4 p-4 border rounded-xl dark:bg-gray-900/80 bg-gray-100 backdrop-blur-sm border-gray-300 dark:border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                <span className="flex items-center text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-500/20 p-3 rounded-lg w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h2 className="font-bold dark:text-gray-200 text-gray-800 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Email
                  </h2>
                  <p className="dark:text-gray-300 text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    ankitsinghchouhan682@gmail.com
                  </p>
                </div>
              </div>
            </li>

            {/* Phone */}
            <li className="relative group mx-5 m-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative flex items-center gap-4 p-4 border rounded-xl dark:bg-gray-900/80 bg-gray-100 backdrop-blur-sm border-gray-300 dark:border-gray-700 group-hover:border-green-500/50 transition-all duration-300">
                <span className="flex items-center text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-500/20 p-3 rounded-lg w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h2 className="font-bold dark:text-gray-200 text-gray-800 text-lg group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    Phone
                  </h2>
                  <p className="dark:text-gray-300 text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    +91 78287 36686
                  </p>
                </div>
              </div>
            </li>

            {/* Location */}
            <li className="relative group mx-5 m-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative flex items-center gap-4 p-4 border rounded-xl dark:bg-gray-900/80 bg-gray-100 backdrop-blur-sm border-gray-300 dark:border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                <span className="flex items-center text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-500/20 p-3 rounded-lg w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MapPin className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h2 className="font-bold dark:text-gray-200 text-gray-800 text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    Location
                  </h2>
                  <p className="dark:text-gray-300 text-gray-700 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    Ujjain, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-dotted pb-10 border-b border-gray-600">
        <div className="container mx-auto">
          <div className="relative group inline-block mx-7 mb-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <h2 className="relative font-bold text-2xl dark:text-gray-200 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
              Have A Question?
            </h2>
          </div>
          <MessageForm />
        </div>
      </div>
    </>
  )
}

export default ContactSection