import React from 'react'
import { RiBookMarkedLine, RiCheckDoubleLine, RiCoinsLine, RiDeleteBin2Line, RiDraftLine, RiGitRepositoryCommitsLine, RiGitRepositoryLine, RiGroupLine, RiMenuLine, RiMore2Fill, RiMore2Line, RiMoreLine, RiNotification3Line, RiNotification4Line, RiPassPendingLine, RiPassValidLine, RiSearchLine, RiSettings3Line } from '@remixicon/react'

export default function Dashboard() {
  return (
    <div className='bg-white rounded-3xl border border-gray-100 p-6 shadow-xl shadow-black/5 hover:shadow-slate-400 '>
        <div className='flex gap-6 w-full mb-6'>
            <div className='flex items-center gap-4 mt-6 w-full text-white'>
                <div className='bg-[#37A2C6] w-16 h-16 flex items-center justify-center rounded-full'>
                    <RiGitRepositoryLine
                    size={35}/>
                </div>
                <div>
                    <div className='text-4xl font-semibold text-black'>10</div>
                    <div className='text-lg font-medium text-black ml-1'>Enrolled Courses</div>
                </div>
            </div>
        </div>
    </div>
  )
}