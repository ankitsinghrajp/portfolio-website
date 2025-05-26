import React from 'react'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Briefcase, FileText, Home, Mail } from 'lucide-react'

const Header = () => {
  return (
    <div className='w-full py-5 border-dotted fixed top-0 z-50 dark:bg-[#09090b]/90 bg-[#EEEEFF]/90 border-b border-gray-600 dark:border-gray-600'>
     <div className='container mx-auto'>
      <div className='flex justify-between items-center md:mx-1 mx-3'>
           <div className='flex items-center gap-6  dark:text-gray-300 font-semibold text-sm'>
      
                <Link href='/' className='flex justify-center items-center gap-1 '>
                <Home className='h-4 w-4'/>
                Home
                </Link>
                <Link href='/' className='flex justify-center items-center gap-1 '>
                <FileText className='h-4 w-4'/>
                  Blog
                </Link>

               
                   <Link href='/' className='flex justify-center items-center gap-1 '>
                <Mail className='h-4 w-4'/>
                  Contact
                </Link>
      
           </div>
           <ThemeToggle/>
           </div>
           </div>
         
    </div>
  )
}

export default Header