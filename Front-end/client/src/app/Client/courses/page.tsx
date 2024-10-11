import React from 'react';
import ItemCourses from '@/components/ItemCourses';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className=" bg-white py-8 px-4 relative">
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

      <div className="container mx-auto flex flex-col md:flex-row mt-6 lg:mt-32">
        {/* Sidebar */}
        <div className="md:w-1/5 lg:w-1/4 p-4 md:pr-6">
          <div className='bg-gray-50 p-4 rounded shadow-lg'>
            <h2 className="font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><input type="checkbox" /> All Category</li>
              <li><input type="checkbox" /> Development</li>
              <li><input type="checkbox" /> Art & Design</li>
              <li><input type="checkbox" /> Business</li>
              <li><input type="checkbox" /> Data Science</li>
              <li><input type="checkbox" /> Finance</li>
              <li><input type="checkbox" /> Health & Fitness</li>
              <li><input type="checkbox" /> Lifestyle</li>
            </ul>
          </div>

          <div className='bg-gray-50 p-4 mt-6 rounded shadow-lg'>
            <h2 className="font-bold mb-4">Languages</h2>
            <ul className="space-y-2">
              <li><input type="checkbox" /> Arabic</li>
              <li><input type="checkbox" /> English</li>
              <li><input type="checkbox" /> Spanish</li>
            </ul>
          </div>

          <div className='bg-gray-50 p-4 mt-6 rounded shadow-lg'>
            <h2 className="font-bold mb-4">Price</h2>
            <ul className="space-y-2">
              <li><input type="checkbox" /> All Price</li>
              <li><input type="checkbox" /> Free</li>
              <li><input type="checkbox" /> Paid</li>
            </ul>
          </div>

          <div className='bg-gray-50 p-4 mt-6 rounded shadow-lg'>
            <h2 className="font-bold mb-4">Skill level</h2>
            <ul className="space-y-2">
              <li><input type="checkbox" /> All Skill</li>
              <li><input type="checkbox" /> Beginner</li>
              <li><input type="checkbox" /> Intermediate</li>
              <li><input type="checkbox" /> High</li>
            </ul>
          </div>

          <div className='bg-gray-50 p-4 mt-6 rounded shadow-lg'>
            <h2 className="font-bold mb-4">Instructors</h2>
            <ul className="space-y-2">
              <li><input type="checkbox" /> All Instructors</li>
              <li><input type="checkbox" /> David Millar</li>
              <li><input type="checkbox" /> Jenny Wilson</li>
              <li><input type="checkbox" /> Wade Warren</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 mt-6 rounded shadow-lg">
            <h2 className="font-bold mb-4">Ratings</h2>
            <ul className="space-y-2">
              <li><input type="checkbox" /> ★★★★★</li>
              <li><input type="checkbox" /> ★★★★</li>
              <li><input type="checkbox" /> ★★★</li>
              <li><input type="checkbox" /> ★★</li>
              <li><input type="checkbox" /> ★</li>
            </ul>
          </div>
        </div>

        {/* Course Grid */}
        <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ml-8 lg:mr-16 gap-4">
          <ItemCourses />
          <ItemCourses />
          <ItemCourses />
          <ItemCourses />
          <ItemCourses />
          <ItemCourses />
          <ItemCourses />
          <ItemCourses />
        </div>
      </div>
    </div>
  );
}
