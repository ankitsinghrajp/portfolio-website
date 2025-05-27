import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const Footer = () => {
  return (
      <footer className="dark:bg-[#09090b] bg-[#eeeeff] border-t border-dotted border-gray-600 dark:border-gray-600 text-white py-8 mt-20">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* About / Brand Section */}
    <div>
      <h3 className="text-2xl dark:text-gray-300 text-gray-700 font-bold mb-2">Ankit Singh Chouhan</h3>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Full Stack Developer | Passionate about building scalable web applications with Node.js, Next.js & modern technologies.
      </p>
    </div>

    {/* Important Links */}
    <div>
      <h4 className="text-lg dark:text-gray-300 text-gray-700 font-bold mb-2">Quick Links</h4>
      <ul className="space-y-1 dark:text-gray-400 text-gray-600 font-semibold ml-2 text-sm">
        <li><a href="#about" className="hover:underline">About Me</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Contact and Socials */}
    <div>
      <h4 className="text-lg dark:text-gray-300 text-gray-700 font-bold mb-2">Let's Connect</h4>
      <p className="font-semibold text-gray-600 dark:text-gray-400 mb-2">ankitcreativeworks@gmail.com</p>
      <div className="flex space-x-4">
         <div className="flex items-center ml-5 px-5 gap-3 py-3">

                <Link href="https://github.com/ankitsinghrajp" target="_blank">
                <Button size="icon" className="" variant="outline">
                 <Image className="" src="/github.png" alt="Github" width={18} height={18}/>
                </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/ankit-singh-chouhan-6612bb252/" target="_blank">
                <Button size="icon" className="" variant="outline">
                 <Image className="" src="/linkedin.png" alt="LinkedIn" width={18} height={18}/>
                </Button>
                </Link>
                <Link href="https://x.com/AnkitSingh84347?t=Ulmyp6hj4pyOeLoVImFJrw&s=09" target="_blank">
                <Button size="icon" className="bg-white" variant="outline">
                 <Image className="" src="/twitter.png" alt="twitter" width={18} height={18}/>
                </Button>
                </Link>
            
        
              </div>
      </div>
    </div>
  </div>

  {/* Bottom line */}
  <div className="text-center text-gray-500 text-sm mt-8">
    © {new Date().getFullYear()} Ankit Singh Chouhan. All rights reserved.
  </div>
</footer>

  )
}

export default Footer

