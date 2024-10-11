import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

interface ItemCoursesProps {
  image?: string;
  title?: string;
  category?: string;
  instructor?: string;
  rating?: number;
  reviews?: number;
  price?: number;
}

const defaultData = {
  id: 1,
  image: "/images/AILecturer.jpg",
  title: "Learning JavaScript With Imagination",
  category: "Development",
  instructor: "David Millar",
  rating: 5,
  reviews: 5,
  price: 15.00,
};

export default function ItemCourses({
  image = defaultData.image,
  title = defaultData.title,
  category = defaultData.category,
  instructor = defaultData.instructor,
  reviews = defaultData.reviews,
  price = defaultData.price,
}: ItemCoursesProps) {
  return (
    <div className='group content-center max-w-xs mx-auto rounded-xl overflow-hidden  bg-white p-4 border-gray-400 border-2 shadow-[0_0_0_rgb(224,224,224)] duration-700 hover:shadow-[9px_9px_0px_rgb(224,224,224)] hover:duration-700 text-black ease-out hover:translate-y-0 transition-all '>
      <div className=' card'>
        <div className='  relative w-full bg-red-200 cursor-pointer rounded-[10px]'>
          <Image
            className='rounded-[10px]'
            src={image}
            alt={title}
            width={350}
            height={110}
          />
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
        </div>
      </div>
      <div className="px-4 pt-4 flex justify-between  items-center ">
        <span className="bg-gray-200 text-gray-600 text-sm font-semibold py-1 px-2 rounded">
          {category}
        </span>
        <div className="text-yellow-500 flex items-center mr-5">
          <span className="mr-1">★</span>
          <span>({reviews} Reviews)</span>
        </div>
      </div>
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-1">{title}</h2>
        <p className="text-gray-600 mb-2">{instructor}</p>
      </div>
      <div className="flex justify-between items-center px-4 pb-4">
        <Button variant={'btn_home'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
          Enroll Now
        </Button>
        <span className="text-gray-800 font-semibold text-center py-2 mr-5">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}
