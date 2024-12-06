import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const CategoryList=[
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Phyton Developer"

]

function Category() {
  return (
    <div className='text-center  mx-auto '>
        <Carousel className="w-full max-w-xl mx-auto my-35">
            <CarouselContent>
              {
                    CategoryList.map((c,i)=>(
                        <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                            <Button className="  bg-[#003366]  text-[#FFD700] border  px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00]  active:border-[#002244] active:shadow-inner">{c}</Button>
                        </CarouselItem>
                    ))
                    }

               
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>


        </Carousel>
      
    </div>
  )
}

export default Category
