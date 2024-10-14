import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function ItemCourses2() {
    return (
        <div className='group flex max-w-4xl mx-auto rounded-xl overflow-hidden bg-white p-4 border-gray-300 border-2 shadow-[0_0_0_rgb(224,224,224)] duration-700 hover:shadow-[9px_9px_0px_rgb(224,224,224)] hover:duration-700 text-black ease-out hover:translate-y-0 transition-all'>

            {/* Image Section */}
            <div className='relative w-1/3 rounded-[10px] overflow-hidden'>
                <Image
                    className='rounded-[10px]'
                    src="/images/AILecturer.jpg"
                    alt='d'
                    width={350}
                    height={250}
                />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
                {/* Badge Section */}
                <div className='absolute top-4 left-4 flex flex-col space-y-2'>
                    <span className="bg-white text-gray-600 text-xs font-semibold py-1 px-2 rounded">Expert</span>
                    <span className="bg-white text-gray-600 text-xs font-semibold py-1 px-2 rounded">Laravel Pro</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 px-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="bg-gray-200 text-gray-600 text-sm font-semibold py-1 px-2 rounded">
                        Development
                    </span>
                    <div className="text-yellow-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <span className='text-gray-500 ml-1'>(5 Reviews)</span>
                    </div>
                </div>

                <h2 className="font-bold text-xl mb-1 text-blue-900">Learning JavaScript With Imagination</h2>
                <p className="text-gray-600 mb-1">By David Millar</p>
                <p className="text-gray-600 mb-2">
                    When an unknown printer took a galley of type and scrambled type specimen book it has survived not only.
                </p>

                <div className="flex justify-between items-center">
                    <Button variant={'btn_submit_courses'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full">
                        Enroll Now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </Button>
                    <span className="text-blue-900 font-semibold text-xl">$15.00</span>
                </div>
            </div>
        </div>
    );
}
