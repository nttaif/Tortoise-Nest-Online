import React from 'react'
import { RiBallPenLine, RiChat3Line, RiDashboardLine, RiFileList2Line, RiGitRepositoryLine, RiIdCardLine, RiMegaphoneLine, RiMenu2Line, RiQuestionLine, RiQuestionnaireLine, RiUserStarLine } from '@remixicon/react'
import { RiSettings3Line } from 'react-icons/ri'

export default function MenuAdmin() {
  return (
    <div className=" lg:w-1/4 ">
        <div className='bg-white p-4 rounded-s-lg shadow-lg'>
            <ul className="space-y-2 p-3">
                <h2 className="font-semibold text-gray-500 p-1">Welcome, Long Nguyen</h2>
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiDashboardLine
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Dashboard</span>
                    </li>
                </div>
                
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiIdCardLine 
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>My Profile</span>
                    </li>
                </div>
                    
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiGitRepositoryLine
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Enrolled Courses</span>
                    </li>
                </div>
                    
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiFileList2Line 
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Wishlist</span>
                    </li>
                </div>
                
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiUserStarLine 
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Reviews</span>
                    </li>
                </div>
                    
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiQuestionLine
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>My Quiz Attempts</span>
                    </li>
                </div>
            </ul>

            <ul className='space-y-2 p-3'>
            <h2 className='font-semibold text-gray-500 p-1'>INSTRUCTOR</h2> 
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiBallPenLine
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>My Courses</span>
                    </li>
                </div>
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiMegaphoneLine
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Announcements</span>
                    </li>
                </div>
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiChat3Line
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Quiz Attempts</span>
                    </li>
                </div>
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiMenu2Line
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Assignment</span>
                    </li>
                </div>
            </ul>
            <ul className='space-y-2 p-3'>
            <h2 className='font-semibold text-gray-500 p-1'>User</h2>
            <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiSettings3Line
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Setting</span>
                    </li>
                </div>
                <div className='bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300'>
                    <li className='flex items-center gap-2 font-semibold text-gray-500 ml-2 group'>
                    <RiMenu2Line
                    size={25}
                    className='text-gray-500 group-hover:text-indigo-700 transition duration-300'/>
                    <span className='group-hover:text-indigo-700 transition duration-300'>Logout</span>
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}
