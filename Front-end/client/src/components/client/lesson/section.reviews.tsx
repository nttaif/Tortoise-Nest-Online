'use client';
import Image from 'next/image';
import React from 'react';

export default function SectionReviews() {
    return (
        <div className="flex flex-col  mx-auto rounded-xl overflow-hidden bg-gray-50 p-6  border shadow-md duration-300 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-black">Reviews</h2>

            {/* Overall Rating Section */}
            <div className="flex items-center mb-6">
                {/* Overall Rating Box */}
                <div className="flex flex-col items-center mr-6 p-7 bg-white rounded-lg shadow-lg border border-gray-100">
                    <span className="text-4xl font-bold text-blue-900">4.8</span>
                    <div className="flex text-yellow-500 mb-1">
                        {Array(5).fill(0).map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-gray-500">12 Ratings</span>
                </div>

                {/* Rating Bars */}
                <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((star, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <span className="text-gray-500 mr-2">
                                {star}{' '}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline text-yellow-500">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <div className="flex-1 bg-gray-200 h-2 rounded-full mr-2">
                                <div className={`h-2 rounded-full ${star === 5 ? 'bg-yellow-500 w-5/6' : star === 4 ? 'bg-yellow-500 w-3/5' : 'w-0'}`} />
                            </div>
                            <span className="text-gray-500">{star === 5 ? 2 : star === 4 ? 1 : 0}</span>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="my-4" />

            {/* Individual Review */}
            <div className="flex items-start mt-4">
                <div className='relative w-28 h-28 mr-6'>
                    <Image
                        className="rounded-full object-cover instructor-image"
                        src="/images/GV5.jpeg"
                        alt='Profile'
                        width={75}
                        height={75}
                    />
                </div>

                {/* Review Content */}
                <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                        <span className="font-semibold text-gray-800">Phan Thiện Nhân</span>
                        <span className="text-gray-500 ml-4">2 Ngày trước</span>
                        <div className="flex mt-2 text-yellow-500 ml-auto">
                            {Array(5).fill(0).map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-black">Nhận xét đánh giá</h3>
                    <p className="text-gray-500 mt-1">
                        Đến với TNO tôi đã học được những điều bổ ích. Gặp được những người bạn mới vui ơi là vui. Và giảng viên thân thiện, hòa đồng, dạy dễ hiểu, có trình độ chuyên môn cao, 10 điểm không có nhưng!
                    </p>

                </div>
            </div>
        </div>
    );
}
