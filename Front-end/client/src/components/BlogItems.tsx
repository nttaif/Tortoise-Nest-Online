import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge';
import { RiCalendarLine, RiUser3Line } from '@remixicon/react';

interface BlogsItemsProps {
  image?: string;
  title?: string;
  category?: string;
  instructor?: string;
  dayPost?:string;
}

const defaultData = {
  id: 1,
  image: "/images/AILecturer.jpg",
  title: "Learning JavaScript With Imagination",
  category: "Development",
  instructor: "David Millar",
  day:"20 July, 2024",
};

export default function BlogsItems({
  image = defaultData.image,
  title = defaultData.title,
  category = defaultData.category,
  instructor = defaultData.instructor,
  dayPost = defaultData.day,
}: BlogsItemsProps) {
  return (
    <div className='group content-center max-w-xs mx-auto rounded-xl overflow-hidden  bg-white p-4 border-gray-400 border-2 shadow-[0_0_0_rgb(224,224,224)] duration-700 hover:shadow-[9px_9px_0px_rgb(224,224,224)] hover:duration-700 text-black ease-out hover:translate-y-0 transition-all '>
    <div className='card relative'>
      <div className='relative w-full bg-red-200 cursor-pointer rounded-[10px]'>
        <Image
          className='rounded-[10px]'
          src={image}
          alt={title}
          width={350}
          height={110}
        />
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
        {/* Đặt Badge vào bên trong hình ảnh, góc trái trên */}
        <div className="absolute top-2 left-2 z-10">
          <Badge className='w-45 text-center rounded-3xl' variant="mainbadge">
            {category}
          </Badge>
        </div>
      </div>
    </div>
    <div className='flex justify-around pt-4 ' >
      <div className='flex' >
      <RiCalendarLine/>
      <p className='text-gray-600 mb-2'>{dayPost}</p>
      </div>
   <div className='flex' >
   <RiUser3Line/>
        <p className="text-gray-600 mb-2">{instructor}</p>
   </div>
      
    </div>
    <div className="px-4 flex justify-between  items-center "></div>
    <div className="px-4 py-2">
    <div className="px-4 py-2">
  <h2 className="font-bold text-xl mb-1 text-black group relative inline-block underline underline-offset-1 decoration-transparent group-hover:decoration-black transition-all duration-300">
    {title}
  </h2>
</div>

</div>

  </div>
  );
}
