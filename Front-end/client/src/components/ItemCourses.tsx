import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function ItemCourses() {
  return (
    <div className='group content-center max-w-xs mx-auto rounded-xl overflow-hidden  bg-white p-4 border-gray-400 border-2 shadow-[0_0_0_rgb(224,224,224)] duration-700 hover:shadow-[9px_9px_0px_rgb(224,224,224)] hover:duration-700 text-black ease-out hover:translate-y-0 transition-all '>
      <div className=' card'>
        <div className='  relative w-full cursor-pointer rounded-[10px]'>
          <Image
            className='rounded-[10px]'
            src="/images/AILecturer.jpg"
            alt='d'
            width={350}
            height={110}
          />
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
        </div>

      </div>
      <div className="px-4 pt-4 flex justify-between  items-center ">
        <span className="bg-gray-300 text-gray-600 text-sm font-semibold py-1 px-2 rounded">
          Phát triển
        </span>

        <div className="text-yellow-500 flex items-center ">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>

          <span className=' text-gray-500 ml-1 '>(5 đánh giá)</span>
        </div>

      </div>
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-1 text-blue-900">Học JavaScript cho người mới bắt đầu </h2>
        <p className="text-gray-600 mb-2">By QuynhNgo</p>

      </div>
      <div className="flex justify-between items-center px-4 pb-4">

        <Button variant={'btn_submit_courses'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-5 rounded-2xl">
          Đăng ký ngay
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 ml-1 sm:hidden lg:inline">
            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </Button>

        <span className="flex items-center mt-1 py-2 mr-5">
          <span className="ml-1 text-xl font-semibold  text-blue-900">$0.00 </span>
        </span>

      </div>
    </div>


  )
}
