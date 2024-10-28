import React from 'react';
import Skills from '@/components/instructorsdetail/skills';
import Profile from '@/components/instructorsdetail/profile';
import Biography from '@/components/instructorsdetail/biography';
import { Button } from '@/components/ui/button';
import ItemCourses from '@/components/ItemCourses';

export default function Page() {
    return (
        <div className="container mx-auto p-6 lg:p-10 min-w-[320px] justify-center">
            <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0">
                {/* Phần bên trái */}
                <div className="lg:w-2/3 space-y-8">
                    <Profile />
                    <Biography />
                    <Skills />
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Khóa học của tôi</h3>
                        <p className="text-gray-600 mb-6">
                            Bạn có thể tìm kiếm các bài học ở phía dưới:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <ItemCourses />
                            <ItemCourses />
                            <ItemCourses />

                        </div>
                    </div>

                </div>

                {/* Phần bên phải cho Quick Contact */}
                <div className="lg:w-1/3 w-full ml-auto max-w-sm">
                    <div className="p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
                        <p className="text-2sm mb-4">
                            Bạn có thể liên hệ chúng tôi qua Twitter hoặc Facebook nếu muốn.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Tên"
                                className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Chủ đề"
                                className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Số điện thoại"
                                className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Tin nhắn của bạn"
                                className="w-full p-3 border border-gray-300 rounded bg-gray-100 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <Button
                                variant={'btn_home'}
                                className="bg-blue-600 hover:bg-blue-700 text-xl text-white font-semibold py-2 px-6 rounded-full mx-auto flex justify-center"
                            >
                                Gửi tin nhắn
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
