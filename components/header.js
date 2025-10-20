"use client"
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { FileText, Home } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { ContactLink } from './contact-link'

const Header = () => {
 
  return (
    <div className='w-full py-5 border-dotted fixed top-0 z-50 dark:bg-[#09090b]/90 bg-[#EEEEFF]/90 border-b border-gray-600 dark:border-gray-600'>
     <div className='container mx-auto'>
      <div className='flex justify-between items-center mx-3'>
           <div className='flex items-center gap-2 dark:text-gray-300 font-semibold text-sm'>
      
                <Link href='/' className='relative group flex justify-center items-center gap-1'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100'></div>
                  <div className='relative flex items-center gap-1 px-3 py-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300'>
                    <Home className='h-4 w-4 group-hover:scale-110 transition-transform duration-300'/>
                    Home
                  </div>
                </Link>

                <Link href='/blog' className='relative group flex justify-center items-center gap-1'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100'></div>
                  <div className='relative flex items-center gap-1 px-3 py-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300'>
                    <FileText className='h-4 w-4 group-hover:scale-110 transition-transform duration-300'/>
                    Blog
                  </div>
                </Link>

                 <ContactLink/>
                 
      
           </div>
           <div className='flex flex-row items-center gap-2'>
        
           <Link href={'https://github.com/ankitsinghrajp'} target='_blank' className='relative group'>
             <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100'></div>
             <Button size="icon" variant='outline' className='relative group-hover:scale-110 transition-transform duration-300 group-hover:border-gray-500'>
               <Image src={'/github.png'} alt='github' height={24} width={24} className='group-hover:scale-110 transition-transform duration-300'/>
             </Button>
           </Link>
              <ThemeToggle/>
           </div>
           </div>
           </div>
         
    </div>
  )
}

export default Header