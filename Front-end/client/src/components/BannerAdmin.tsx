import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import AddCoursesTable from './admin/courses/add.courses.table';
import { UploadUrlData, User } from '@/types/next-auth';

interface IProps{
    listLecturer: User[];
    resUploadImage: UploadUrlData;
}
export default function BannerAdmin(props:IProps) {
const {listLecturer,resUploadImage} = props;
console.log('>>>Check lisstlecturer: ',listLecturer)
  return (
    <div className="w-full flex ">
        <div className='w-full flex flex-col justify-center'>
            {/* banner about us */}
            <div className="w-full flex flex-col md:flex-row bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 p-8 rounded-xl items-center md:items-stretch">
                {/* Text Section */}
                <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
                <p className="w-fit font-semibold text-2xl text-white">Math Instructor</p>
                <h3 className="w-fit text-[36px] md:text-[44px] lg:text-[54px] pb-4 font-bold">Learn With John Due</h3>
                </div>

                <div className='w-[30%] z-10 ' >
                    <Image
                    src="/images/pic1-removebg-preview.png"
                    width={250}
                    height={250}
                    alt="Hello"
                    className="flex justify-center items-center "
                    />
                    </div>
            </div>

            {/* Bottom Section with Avatar and Button */}
            <div className="flex items-center justify-between w-full px-8 py-5 gap-5 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 rounded-xl -mt-8 relative z-10 flex-col sm:flex-row">
                <div className="flex items-center">
                    <Image
                        src="/images/Img_Intructor.png"
                        width={80}
                        height={80}
                        alt="Avatar"
                        className="rounded-full"
                    />
                    <div className='ml-3'>
                        <h4 className='font-semibold text-xl'>John Due</h4>
                        <p className="flex items-center ">
                            <span className="text-yellow-400 text-xl">★★★★★</span>
                            <span className="ml-2 text-sm text-gray-200">(15 Reviews)</span>
                        </p>    
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 pb-4 ">
                    <AddCoursesTable resUploadImage={resUploadImage} listLecturer={listLecturer}></AddCoursesTable>
                    <span className="text-gray-800 font-semibold text-center py-2 mr-5"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
