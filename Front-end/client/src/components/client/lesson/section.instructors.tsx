'use client';
import Image from 'next/image';
import React from 'react';

import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function SectionInstructors() {
    return (
        <div className='flex   mx-auto rounded-xl overflow-hidden bg-white p-6  border shadow-md duration-300 hover:shadow-lg transition-all'>

            {/* Profile Image Section */}
            <div className='relative w-[255px] h-[255px] flex-shrink-0'>
                <Image
                    className="rounded-full object-cover instructor-image"
                    src="/images/GV4.jpg"
                    alt='Profile'
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 px-6">
                {/* Name and Role */}
                <h2 className="font-bold text-2xl text-blue-900 mt-2">Ngô Thị Đăng Quỳnh</h2>
                <a href="#" className="text-blue-500 text-xl mb-2 ">UX Design </a>

                {/* Star Rating */}
                <div className="text-yellow-500 flex items-center mb-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <span className='text-gray-500 ml-1 text-xl'>(4.8 Ratings)</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-xl">
                    Giảng viên tài năng giảng dạy khóa Mobile App Web Design và UX Design tại TNO. Với nhiều năm kinh nghiệm trong lĩnh vực Product Design.

                </p>

                {/* Share Course */}
                <div className="text-center mb-4 mt-6 text-4xl">
                    <div className="flex justify-center space-x-3 text-gray-600">
                        <FaFacebook className="hover:text-blue-600 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-400 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <FaWhatsapp className="hover:text-green-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <FaYoutube className="hover:text-red-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}
