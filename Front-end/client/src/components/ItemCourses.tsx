import Image from 'next/image'
import React from 'react'

export default function ItemCourses() {
  return (
    <div className='group max-w-xs mx-auto rouded overflow-hidden shadow-lg bg-white pl-4'>
      <div className='card'>
          <div className=' justify-center items-center relative w-full bg-red-200 cursor-pointer'>
            <Image
            src="/images/bgAuth.jpg" 
            alt='d'
            width={350}
            height={110}
            />
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
        </div>
      
      </div>
      <div className="px-4 pt-4 flex justify-between  items-center ">
        <span className="bg-gray-200 text-gray-600 text-sm font-semibold py-1 px-2 rounded">
          Development
        </span>
        <div className="text-yellow-500 flex items-center mr-5">
          <span className="mr-1">★</span> 
          <span>(5 Reviews)</span>
        </div>

      </div>
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-1">Learning JavaScript With Imagination</h2>
        <p className="text-gray-600 mb-2">By David Millar</p>
        
        </div>
        <div className="flex justify-between items-center px-4 pb-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
          Enroll Now
        </button>

        <span className="text-gray-800 font-semibold text-center py-2 mr-5">$15.00</span>

        </div>
      </div>
        
 
  )
}
