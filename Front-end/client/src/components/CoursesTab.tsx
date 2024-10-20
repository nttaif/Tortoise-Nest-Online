"use client";

import React, { useState } from 'react';
import ItemCourses from './ItemCourses';

// Định nghĩa kiểu dữ liệu cho từng khóa học
interface Course {
  title: string;
  progress: number;
  hours: string;
  reviews: number;
  category?: string;
  instructor?: string;
  price?: number;
  image?: string;
}

// Dữ liệu các khóa học
const coursesData: Record<string, Course[]> ={
    'Enrolled Courses': [
    { 
      title: 'Learning JavaScript With Imagination', 
      progress: 88, 
      hours: '11h 20m', 
      reviews: 4.5, 
      category: 'Development', 
      instructor: 'David Millar', 
      price: 15.00, 
      image: '/images/AILecturer2.jpg' 
    },
    { 
      title: 'The Complete Graphic Design for Beginners', 
      progress: 70, 
      hours: '70h 45m', 
      reviews: 4.5, 
      category: 'Design', 
      instructor: 'Emily Stone', 
      price: 30.00, 
      image: '/images/AILecturer.jpg' 
    },
    { 
        title: 'Learning JavaScript With Imagination', 
        progress: 70, 
        hours: '70h 45m', 
        reviews: 4.5, 
        category: 'Data Science', 
        instructor: 'Wilson', 
        price: 30.00, 
        image: '/images/AILecturer3.jpg' 
      },
  ],
  'Active Courses': [
    { 
      title: 'Financial Analyst Training & Investing Course', 
      progress: 40, 
      hours: '5h', 
      reviews: 4.5, 
      category: 'Business', 
      instructor: 'Robert Fox', 
      price: 12.00, 
      image: '/images/AILecturer4.jpg' 
    },
    { 
        title: 'Learning JavaScript With Imagination', 
        progress: 40, 
        hours: '5h', 
        reviews: 4.5, 
        category: 'Mathematic', 
        instructor: 'Hawkins', 
        price: 12.00, 
        image: '/images/AILecturer5.jpg' 
    },
    { 
        title: 'Learning JavaScript With Imagination', 
        progress: 40, 
        hours: '5h', 
        reviews: 4.5, 
        category: 'Development', 
        instructor: 'David Millar', 
        price: 12.00, 
        image: '/images/AILecturer2.jpg' 
      },
  ],
  'Completed Courses': [
    { 
      title: 'The Complete Graphic Design for Beginners', 
      progress: 100, 
      hours: '18h 20m', 
      reviews: 4.5, 
      category: 'Design', 
      instructor: 'Emily Stone', 
      price: 50.00, 
      image: '/images/AILecturer.jpg' 
    },
    { 
        title: 'Learning JavaScript With Imagination', 
        progress: 100, 
        hours: '18h 20m', 
        reviews: 4.5, 
        category: 'Data Science', 
        instructor: 'Wilson', 
        price: 50.00, 
        image: '/images/AILecturer3.jpg' 
      },
      { 
        title: 'Learning JavaScript With Imagination', 
        progress: 100, 
        hours: '18h 20m', 
        reviews: 4.5, 
        category: 'Development', 
        instructor: 'David Millar', 
        price: 50.00, 
        image: '/images/AILecturer2.jpg' 
      },
  ],
};

// Định nghĩa kiểu dữ liệu cho đối tượng coursesData
interface CoursesData {
  'Enrolled Courses': Course[];
  'Active Courses': Course[];
  'Completed Courses': Course[];
}

export default function CoursesTab() {
  // Khai báo state với kiểu cụ thể là key của `CoursesData`
  const [activeTab, setActiveTab] = useState<string>('Enrolled Courses');

  return (
      <div>
        {/* Tab Header */}
        <div className="flex justify-start border-b-2 gap-8">
          {Object.keys(coursesData).map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-lg font-semibold ${
                activeTab === tab ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab as keyof CoursesData)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData[activeTab].map((course, index) => (
            <ItemCourses
              key={index}
              image={course.image}
              title={course.title}
              category={course.category}
              instructor={course.instructor}
              reviews={course.reviews}
              price={course.price}
            />
          ))}
        </div>
      </div>
  );
}
