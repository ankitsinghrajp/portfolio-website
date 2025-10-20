import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/ankitsinghrajp",
      icon: "/github.png"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/ankit-singh-chouhan-6612bb252/",
      icon: "/linkedin.png"
    }
  ]

  return (
    <footer className="dark:bg-[#09090b] bg-[#eeeeff] border-t border-dotted border-gray-600 dark:border-gray-600 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
                  Ankit Singh Chouhan
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Full-Stack Developer | Scalable Backend Engineer
                </p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  <Mail className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>ankitsinghchouhan682@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-1">
                  <Phone className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>+91 78287 36686</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:translate-x-1">
                  <MapPin className="h-4 w-4 text-violet-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>India (Remote OK)</span>
                </div>
              </div>

              <Link href="#contact" className="relative group/button inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover/button:blur-lg transition-all duration-300 opacity-0 group-hover/button:opacity-100"></div>
                <Button className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group/button hover:scale-105 transition-transform duration-300">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative">
              <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index} className="relative group/link">
                    <a 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium inline-flex items-center gap-2 hover:translate-x-2"
                    >
                      <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative">
              <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Connect
              </h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} target="_blank" className="relative group/social">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover/social:blur-lg transition-all duration-300 opacity-0 group-hover/social:opacity-100"></div>
                    <Button 
                      size="icon" 
                      variant="outline"
                      className="relative hover:scale-110 transition-all duration-300 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 group-hover/social:shadow-lg"
                    >
                      <Image 
                        src={social.icon} 
                        alt={social.name} 
                        width={20} 
                        height={20}
                        className="group-hover/social:scale-110 transition-transform duration-300"
                      />
                    </Button>
                  </Link>
                ))}
                <Link href={"https://x.com/AnkitSingh84347?t=Ulmyp6hj4pyOeLoVImFJrw&s=09"} target="_blank" className="relative group/social">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover/social:blur-lg transition-all duration-300 opacity-0 group-hover/social:opacity-100"></div>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="relative hover:scale-110 transition-all duration-300 border-gray-300 dark:bg-white/30 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 group-hover/social:shadow-lg"
                  >
                    <Image 
                      src={'/twitter.png'} 
                      alt={"Twitter"} 
                      width={20} 
                      height={20}
                      className="group-hover/social:scale-110 transition-transform duration-300"
                    />
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                Building scalable, production-ready MERN applications with real-time features and optimized backend architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
              © 2025 Ankit Singh Chouhan. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer