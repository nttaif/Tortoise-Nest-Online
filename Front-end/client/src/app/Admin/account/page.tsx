import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RiDashboardLine, RiFileList2Line, RiGitRepositoryLine, RiIdCardLine, RiQuestionLine, RiQuestionnaireLine, RiUserStarLine } from '@remixicon/react'
import MenuAdmin from '@/components/MenuAdmin'
import Profile from '@/components/Profile'
import BannerAdmin from '@/components/BannerAdmin'

export default function page() {
  return (
    <div className='bg-white py-8 px-4 flex justify-center'>
      <div className='container px-auto'>
        <div className='w-full flex'>
          <BannerAdmin></BannerAdmin>
        </div>
        <div className='bg-gray-100 rounded-xl container mx-auto border-2 border-gray-300 mt-12'>
          <div className='bg-gray-100 min-h-[80vh] flex flex-col lg:flex-row justify-between gap-2'>
            {/* Sidebar */}
            <MenuAdmin></MenuAdmin>
            {/*Proflie */}
            <div className='lg:w-[70%] px-12 py-12'>
              <Profile></Profile>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
