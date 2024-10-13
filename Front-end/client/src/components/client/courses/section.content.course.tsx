'use client'
import React, { useState } from 'react'
import ItemCourses from '@/components/ItemCourses';
import ItemCourses2 from '@/components/ui/ItemCourses2';

export default function SectionContentCourse() {
    const [isShowList, setShowList] = useState(false);
    return (
        <div className="md:w-4/5 lg:w-3/4">
            <div className="flex justify-between items-center mb-6 ">
                <h2 className=" text-gray-600 ml-5 font-light">Hiển thị  kết quả</h2>
                <div className='flex items-center gap-2'>
                    <span className='text-gray-600 '> Sắp xếp: </span>
                    <div className="relative ">
                        <select className=" p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="price-asc">Sắp xếp theo mức độ phổ biến</option>
                            <option value="price-desc">Sắp xếp theo giá</option>
                            <option value="rating-asc">Sắp xếp theo mức độ đánh giá</option>
                        </select>
                    </div>
                    {/* //buton */}
                    <div onClick={() => { setShowList(false) }} className=' bg-white hover:bg-blue-300 cursor-pointer p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"></path></svg>
                    </div>
                    <div onClick={() => { setShowList(true) }} className='mr-10 bg-white hover:bg-blue-300 cursor-pointer p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
                    </div>
                </div>
            </div>
            {/* Add grid content here */}
            {!isShowList ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                    <ItemCourses />
                </div>
            ) : (
                <div className="grid grid-rows-1 sm:grid-row-2 lg:grid-rows-3 gap-6">
                    <ItemCourses2 />
                    <ItemCourses2 />
                    <ItemCourses2 />
                    <ItemCourses2 />
                    <ItemCourses2 />
                    <ItemCourses2 />
                </div>
            )}
            <div className="flex space-x-4 justify-center mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mt-4" // Adjust size here
                >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full">
                        1
                    </button>
                </div>

                <button className="bg-gray-200 text-gray-600 font-bold py-3 px-5 rounded-full">
                    2
                </button>
                <button className="bg-gray-200 text-gray-600 font-bold py-3 px-5 rounded-full">
                    3
                </button>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mt-4" // Adjust size here
                >
                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
            </div>

        </div>
    )
}