import React from 'react'
import InfiniteSlider from '@/components/InfiniteSlider'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
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
              <Button className='w-[200px] md:w-[250px] h-[55px] bg-blue-700 hover:bg-yellow-600 text-white  font-bold py-2 px-4 rounded-full' variant="btn_home">
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
    {/*done banner about us */}
    
    {/* content */}
    <div className='Main-Content'>
      <div className="w-full flex flex-col md:flex-row justify-center items-center py-10 bg-white">
        {/* Hình ảnh bên trái */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full content-center overflow-hidden">
            <Image
              src='/images/laravel8.0.png'
              width={500}
              height={500}
              alt='Hello'
            />
            <button className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <span className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9.75a.75.75 0 011.07-.67l5.5 3.25a.75.75 0 010 1.34l-5.5 3.25A.75.75 0 0110 16.25V9.75z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div> */}
          {/*Lamf lauj*/}
        </div>

        {/* Nội dung bên phải */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
          <span className="inline-block text-sm text-indigo-600 bg-indigo-100 rounded-full px-4 py-1 mb-4">Get More About Us</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Empowering Students To Reach Their <span className="text-yellow-400">Potential</span> Goal For Next Level Challenge.
          </h1>
          <p className="mt-4 text-gray-600">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>

          {/* Danh sách các tính năng */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3.47 10.4h10.94l-8.87 6.44 3.37 10.36L12 17.16l-8.91 6.44 3.37-10.36L0 10.4h10.93z" />
                </svg>
              </span>
              <span className="ml-4">The Most World Class Instructors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3.47 10.4h10.94l-8.87 6.44 3.37 10.36L12 17.16l-8.91 6.44 3.37-10.36L0 10.4h10.93z" />
                </svg>
              </span>
              <span className="ml-4">Access Your Class Anywhere</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l3.47 10.4h10.94l-8.87 6.44 3.37 10.36L12 17.16l-8.91 6.44 3.37-10.36L0 10.4h10.93z" />
                </svg>
              </span>
              <span className="ml-4">Flexible Course Plan</span>
            </li>
          </ul>

          {/* Nút gọi hành động */}
          <div className="mt-8">
            <Button className="w-[200px] h-[50px] bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all" variant='btn_home'>
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Phần logo đối tác */}
      <div className="w-full bg-gray-50 py-12">
        <div className="w-full flex justify-center items-center py-6 bg-indigo-900">
          <InfiniteSlider/>
        </div>
        {/*Kết thúc phần logo đối tác */}
        {/*Bắt đầu Phần giới thiệu */}
        <div className="text-center py-10">
          <span className="inline-block text-sm text-indigo-600 bg-indigo-100 rounded-full px-4 py-1 mb-4">Our Top Features</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achieve Your Goal With SkillGrow</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">When an unknown printer took a galley of type and scrambled it to make a type specimen book, it has survived not only five centuries.</p>
        </div>

        {/* Phần các tính năng */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Card 1 */}
        <div className="w-80 bg-blue-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-300 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6-8h6m-2 8V8m-8 4v6m4-6v4m-2-4V4m6 8v4m-2-4v2m0-4V4m4 0v2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Expert Tutors</h3>
          </div>
          <p className="text-gray-600">When an unknown printer took a galley of type and scrambled makes.</p>
        </div>

        {/* Card 2 */}
        <div className="w-80 bg-purple-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-purple-300 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h6m0 0h6m-6-6v12m0-12l-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Effective Courses</h3>
          </div>
          <p className="text-gray-600">When an unknown printer took a galley of type and scrambled makes.</p>
        </div>

        {/* Card 3 */}
        <div className="w-80 bg-yellow-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-yellow-300 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Earn Certificate</h3>
          </div>
          <p className="text-gray-600">When an unknown printer took a galley of type and scrambled makes.</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
