"use client"
import Image from "next/image"

const Hero = ({imageLink,title}) => {

  return (

       <div className='w-full md:w-[60%]'>
                        <div className=''>
                     <Image priority className='h-[400px] w-full object-cover rounded-md' src={imageLink} alt={title} height={400} width={900}/>
                     </div>
                     </div>
  )
}

export default Hero