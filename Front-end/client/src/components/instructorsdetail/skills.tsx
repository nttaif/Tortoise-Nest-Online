'use client';
import React from 'react';


export default function Skills() {
    return (
        <div className="flex flex-col w-[980px] mx-auto rounded-xl overflow-hidden bg-white p-6 border-gray-300 border shadow-md duration-300 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-black">Kỹ năng</h2>
            <p className=" mb-4 text-3sm">
                Giảng viên tài thành thạo tất cả ngôn ngữ lập trình như C#, Java, PHP, React, Angula,.... Với nhiều năm kinh nghiệm trong các lĩnh vực lập trình.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-700">PHP</span>
                        <span className="text-gray-700">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full " style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-700">React</span>
                        <span className="text-gray-700">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full " style={{ width: '92%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Java</span>
                        <span className="text-gray-700">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full " style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-700">Angular</span>
                        <span className="text-gray-700">86%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '86%' }}></div>
                    </div>
                </div>
            </div>
        </div>


    );
}