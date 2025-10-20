"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

export const ContactLink = () => {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <Link href='#contact' className='relative group flex justify-center items-center gap-1'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100'></div>
                  <div className='relative flex items-center gap-1 px-3 py-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300'>
                    <Mail className='h-4 w-4 group-hover:scale-110 transition-transform duration-300'/>
                    Contact
                  </div>
                </Link>
  );
};
