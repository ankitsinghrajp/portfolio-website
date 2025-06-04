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
      <div className='flex justify-between items-center md:mx-1 mx-3'>
           <div className='flex items-center gap-6  dark:text-gray-300 font-semibold text-sm'>
      
                <Link href='/' className='flex justify-center items-center gap-1 '>
                <Home className='h-4 w-4'/>
                Home
                </Link>
                <Link href='/blog' className='flex justify-center items-center gap-1 '>
                <FileText className='h-4 w-4'/>
                  Blog
                </Link>

                 <ContactLink/>
                 
      
           </div>
           <div className='flex flex-row items-center gap-2'>
        
           <Link href={'https://github.com/ankitsinghrajp'} target='_blank'>
           <Button size="icon" variant='outline' >
               <Image src={'/github.png'} alt='github' height={24} width={24}/>
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