"use client"
import React from 'react'
import skills from "@/data/skills.json"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const CarouselSection = () => {
  return (
     <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="my-10"
    >
        <CarouselContent className = "">
            {skills.map((skill)=>{
                return <CarouselItem className="basis-1/3 flex flex-col items-center gap-2 md:basis-1/6" key={skill.id}>

                     <Image
                src={skill.path}
                alt={skill.title}
                height={100}
                width={100}
                />
               <span className='dark:text-gray-400 text-gray-700'>{skill.title}</span>

                </CarouselItem>
            })}
        </CarouselContent>
    </Carousel>
  )
}

export default CarouselSection