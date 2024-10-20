import React from 'react';
import MenuAdmin from '@/components/MenuAdmin';
import BannerAdmin from '@/components/BannerAdmin';
import CoursesTab from '@/components/CoursesTab';

export default function HomePage() {
  return (
    <div className="bg-white py-8 px-4 flex justify-center">
      <div className="container px-auto">
        <div className="w-full flex">
          <BannerAdmin />
        </div>
        <div className="bg-gray-100 rounded-xl container mx-auto border-2 border-gray-300 mt-12">
          <div className="bg-gray-100 min-h-[80vh] flex flex-col lg:flex-row justify-between">
            {/* Sidebar */}
            <MenuAdmin />
            
            {/* Content */}
            <div className="p-8">
                <div className='bg-white rounded-xl'>
                    <div className="px-12 py-12 ">
                        <h2 className='font-semibold text-xl text-black pb-12'>Enrolled Courses</h2>
                        <CoursesTab />
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
