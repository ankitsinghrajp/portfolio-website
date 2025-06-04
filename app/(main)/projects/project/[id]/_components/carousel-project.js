"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const CarouselProject = ({project}) => {
  return (
    <div className='md:w-[75%] md:p-20 px-3 py-10 md:py-0 mx-2 '>

        <Carousel
         plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
        >
  <CarouselContent>
     {project.screenshots.map((screenshot,index)=>{
        return <CarouselItem key={`screenshot-${index}`}><Image className="rounded-md" src={screenshot} alt={`screenshot-${index}`} height={400} width={1000}/></CarouselItem>
     })}
    
  
  </CarouselContent>

</Carousel>


    </div>
  )
}

export default CarouselProject