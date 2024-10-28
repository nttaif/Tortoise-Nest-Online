'use client';
import Image from 'next/image';
import React from 'react';

import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Profile() {
    return (
        <div className='flex w-[980px]  mx-auto rounded-xl overflow-hidden bg-blue-950 p-6 border-gray-300 border shadow-md duration-300 hover:shadow-lg transition-all'>

            {/* Profile Image Section */}
            <div className='relative w-[255px] h-[255px] flex-shrink-0'>
                <Image
                    className="rounded-full object-cover instructor-image"
                    src="/images/GV1.jpg"
                    alt='Profile'
                    width={200}
                    height={200}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 px-6">
                {/* Name and Role */}
                <h2 className="font-bold text-2sm text-white mt-2">Ngô Thanh Tài</h2>
                <a href="#" className="text-white  mb-2 text-3sm ">Developer</a>

                {/* Star Rating */}
                <div className="flex items-center mb-2 mt-2 space-x-10 text-3sm">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white">(4.8 Đánh giá)</span>
                    </div>

                    <div className="flex items-center space-x-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                        <span className="text-white">(ntt@gmail.com)</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                        <span className="text-white">(0123456789)</span>
                    </div>
                </div>

                {/* Description */}
                <p className=" mb-4 text-3sm text-white">
                    Giảng viên tài năng giảng dạy TNO. Với nhiều năm kinh nghiệm trong các lĩnh vực lập trình.

                </p>

                {/* Share Course */}
                <div className="ml-auto mb-4 mt-6 text-4xl">
                    <div className="flex  space-x-3 text-white ">
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
