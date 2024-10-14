import React from 'react'
import Image from 'next/image';

import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';

export default function page() {
  return (
    <div className="container mx-auto p-6">
      {/* Header khóa học */}
      <div className="bg-white rounded-lg shadow-lg grid grid-cols-3 gap-6">
        {/* Cột trái - Hình ảnh và nhãn */}
        <div className="relative col-span-2">
          <Image
            src="/images/laravel8.0.png" // Thay thế bằng đường dẫn ảnh của bạn
            alt="Course Banner"
            width={1100}
            height={900}
            className="rounded-l-lg object-cover"
          />
          <div className="absolute top-4 left-4 space-y-2">
            <span className="bg-yellow-400 text-black text-sm font-bold py-1 px-2 rounded">
              Expert
            </span>
            <span className="bg-yellow-400 text-black text-sm font-bold py-1 px-2 rounded">
              Laravel Pr
            </span>
          </div>
        </div>

        {/* Cột phải - Thông tin khóa học */}
        <div className="bg-white p-6 rounded-lg shadow-lg">

          {/* Nhúng video vào đây */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Course Preview</h2>
            <div className="relative pb-[56.25%] h-0"> {/* Aspect ratio 16:9 */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Ml4XCF-JS0k" // Thay thế bằng link video thực tế
                title="Course Preview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Phần giá */}
          <div className="bg-purple-600 text-white text-center rounded-lg py-4 mb-4">
            <p className="text-xl font-bold">This Course Fee:</p>
            <p className="text-3xl font-bold">$18.00</p>
            <p className="line-through text-gray-300">$32.00</p>
          </div>

          {/* Thông tin chi tiết khóa học */}
          <div className="text-gray-600 space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="font-semibold">Level:</span>
              <span>Expert</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Duration:</span>
              <span>11h 20m</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Lessons:</span>
              <span>12</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Quizzes:</span>
              <span>145</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Certifications:</span>
              <span>Yes</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Graduation:</span>
              <span>25K</span>
            </div>
          </div>

          {/* Hình thức thanh toán */}
          <div className="text-center mb-4">
            <p className="font-bold text-gray-700 mb-2">Secure Payment:</p>
            <div className="flex justify-center space-x-2">
              <Image
                src="/images/payment.webp" // Đặt đường dẫn đến ảnh của các logo thanh toán
                alt="Payment Logos"
                width={180}
                height={20}
              />
            </div>
          </div>

          {/* Chia sẻ khóa học */}
          <div className="text-center mb-4">
            <p className="font-bold text-gray-700 mb-2">Share this course:</p>
            <div className="flex justify-center space-x-3 text-gray-600">
              <FaFacebook />
              <FaTwitter />
              <FaWhatsapp />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* Nút bấm */}
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full w-full flex items-center justify-center">
            <span>See All Instructors</span>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Tabs điều hướng thông tin khóa học */}
      <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Resolving Conflicts Between Designers And Engineers</h1>
          <div className="text-yellow-500 flex items-center">4.5 Reviews</div>
        </div>
        <p className="text-gray-600">By David Millar</p>
        <p className="text-gray-600 mb-6">24/07/2024 • 2,250 Students</p>

        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Overview
          </button>
          <button className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full">
            Curriculum
          </button>
          <button className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full">
            Instructors
          </button>
          <button className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full">
            Reviews
          </button>
        </div>
      </div>

      {/* Mô tả khóa học */}
      <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Course Description</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-4">What you'll learn in this course?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Work with color & gradients & grids</li>
          <li>All the useful shortcuts</li>
          <li>Be able to create Flyers, Brochures, Advertisements</li>
          <li>How to work with images & text</li>
        </ul>
      </div>
    </div>
  )
}
