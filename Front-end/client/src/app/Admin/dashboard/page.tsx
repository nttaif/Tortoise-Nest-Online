import React from 'react'
import ItemCourses from '@/components/ItemCourses'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ItemDashboard from '@/components/ItemDashboard'
import { RiDashboardLine, RiFileList2Line, RiGitRepositoryLine, RiIdCardLine, RiQuestionLine, RiQuestionnaireLine, RiUserStarLine } from '@remixicon/react'
import MenuAdmin from '@/components/MenuAdmin'
import Tabledata from '@/components/TableData'
import BannerAdmin from '@/components/BannerAdmin'

export default function page() {
  return (
    <div className='bg-white py-8 px-4 flex justify-center'>
      <div className="container px-auto">
        {/* banner about us */}
        <div className='w-full flex'>
          <BannerAdmin></BannerAdmin>
        </div>
      

      <div className='bg-gray-100 rounded-xl container mx-auto border-2 border-gray-300 mt-12'>
        <div className=" min-h-[80] flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <MenuAdmin></MenuAdmin>

          {/* Course Grid */}
          <div className='p-3 mb-6 mx-4'> 
            <h2 className="text-black p-6 font-semibold text-xl ">Dashboard</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ml-6'>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
            </div>

            <h2 className='font-semibold text-xl text-black p-6 '> In progress Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ml-8 gap-6">
              <ItemCourses />
              <ItemCourses />
              <ItemCourses />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
