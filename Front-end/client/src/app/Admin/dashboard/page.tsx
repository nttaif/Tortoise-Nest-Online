import React from 'react'
import ItemCourses from '@/components/ItemCourses'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ItemDashboard from '@/components/ItemDashboard'
import { RiDashboardLine, RiFileList2Line, RiGitRepositoryLine, RiIdCardLine, RiQuestionLine, RiQuestionnaireLine, RiUserStarLine } from '@remixicon/react'
import MenuAdmin from '@/components/MenuAdmin'
import Tabledata from '@/components/TableData'

export default function page() {
  return (
    <div className='bg-white py-8 px-4 relative'>
      <div className="relative z-10 text-left mb-8">
        {/* banner about us */}
        <section id='banner' className='w-full flex flex-col md:flex-row bg-banner-main pt-2'>
          <div className='w-full'>
            <div className='flex flex-col md:flex-row justify-around w-full text-black'>
              <div className='content-center w-full md:w-[50%] lg:w-[30%] text-center md:text-left px-4 md:px-0'>
                <h3 className='text-[36px] md:text-[44px] lg:text-[54px] pb-4'>
                  Không ngừng <b>học tập</b> và rèn luyện
                </h3>
                <p className='font-thin text-[#7b798c]'>
                  Mỗi hành trình dạy và học đều là duy nhất. Theo dõi Chúng tôi sẽ giúp bạn định hướng con đường của mình.
                </p>

                <div className='pt-10'>
                  <Button className='w-[200px] md:w-[250px]' variant="btn_home">
                    <a href="#">Bắt đầu ngay thôi</a>
                  </Button>
                </div>
              </div>
              <div className='w-full md:w-[50%] lg:w-[30%] flex justify-center md:justify-end'>
                <Image
                  src='/images/pic1-removebg-preview.png'
                  width={500}
                  height={500}
                  alt='Hello'
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='bg-gray-100 rounded-xl container mx-auto border-2 border-gray-300'>
        <div className=" flex flex-row md:flex-row">
          {/* Sidebar */}
          <MenuAdmin></MenuAdmin>

          {/* Course Grid */}
          <div className='p-3 mb-6 ml-4'>
            <h2 className="text-black p-6 font-semibold text-xl ">Dashboard</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 ml-6'>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
              <ItemDashboard></ItemDashboard>
            </div>

            <h2 className='font-semibold text-xl text-black p-6 '> In progress Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ml-8 gap-4">
              <ItemCourses />
              <ItemCourses />
              <ItemCourses />
            </div>
            
            <div className='pt-3'>
              <h2 className="text-black p-6 font-semibold text-xl ">Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
