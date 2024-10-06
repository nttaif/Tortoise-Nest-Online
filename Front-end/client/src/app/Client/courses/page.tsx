import React from 'react';
import ItemCourses from '@/components/ItemCourses';
import Image from 'next/image';

export default function Page() {
  return (
<div className="bg-white py-8 px-4 relative">
    <div className="relative z-10 text-left mb-8">
    <h1 className="text-5xl font-semibold text-gray-900">All Courses</h1>
    <div className="mt-2 text-sm text-gray-500">
      <span>Home</span> &gt; <span className="text-indigo-600">Courses</span>
    </div>
 
  </div>

   <div className="flex mt-6 ">
     <div className="w-1/5 p-4 ">

      <div className=' bg-gray-200 p-4 rounded shadow-lg  '>
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

      <div className=' bg-gray-200 p-4  mt-6 rounded shadow-lg  '>
          <h2 className="font-bold mt-6 mb-4">Languages</h2>
          <ul className="space-y-2">
            <li><input type="checkbox" /> Arabic</li>
            <li><input type="checkbox" /> English</li>
            <li><input type="checkbox" /> Spanish</li>
          </ul>
        </div>

        <div className=' bg-gray-200 p-4  mt-6 rounded shadow-lg  '>
          <h2 className="font-bold mt-6 mb-4">Price</h2>
          <ul className="space-y-2">
            <li><input type="checkbox" /> All Price</li>
            <li><input type="checkbox" /> Free</li>
            <li><input type="checkbox" /> Paid</li>
          </ul>
        </div>

        <div className=' bg-gray-200 p-4  mt-6 rounded shadow-lg  '>
          <h2 className="font-bold mt-6 mb-4">Skill level</h2>
          <ul className="space-y-2">
            <li><input type="checkbox" /> All Skill</li>
            <li><input type="checkbox" /> Beginner</li>
            <li><input type="checkbox" /> Intermediate</li>
            <li><input type="checkbox" /> High</li>
          </ul>
        </div>
        
        <div className=' bg-gray-200 p-4  mt-6 rounded shadow-lg  '>
          <h2 className="font-bold mt-6 mb-4">Instructors</h2>
          <ul className="space-y-2">
            <li><input type="checkbox" /> All Instructors</li>
            <li><input type="checkbox" /> David Millar</li>
            <li><input type="checkbox" /> Jenny Wilson</li>
            <li><input type="checkbox" /> Wade Warren</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 mt-6 rounded shadow-lg">
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

        <div className="w-3/4 grid grid-cols-3 gap-4">
    
            <ItemCourses/>
          <ItemCourses/>
          <ItemCourses/>
          <ItemCourses/>
          <ItemCourses/>
          <ItemCourses/>
          <ItemCourses/>
          <ItemCourses/>
          {/* <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Development"
            title="Learning JavaScript With Imagination"
            author="David Millar"
            price="$15.00"
            reviews={5}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Art & Design"
            title="The Complete Graphic Design for Beginners"
            author="Jenny Wilson"
            price="$19.00"
            reviews={4.5}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Business"
            title="Learning Digital Marketing on Facebook"
            author="Wade Warren"
            price="$10.00"
            reviews={4.8}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Business"
            title="Learning Digital Marketing on Facebook"
            author="Wade Warren"
            price="$10.00"
            reviews={4.8}
          /><ItemCourses 
          imageSrc="/images/bgAuth.jpg"
          category="Business"
          title="Learning Digital Marketing on Facebook"
          author="Wade Warren"
          price="$10.00"
          reviews={4.8}
        />
        <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Business"
            title="Learning Digital Marketing on Facebook"
            author="Wade Warren"
            price="$10.00"
            reviews={4.8}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Business"
            title="Learning Digital Marketing on Facebook"
            author="Wade Warren"
            price="$10.00"
            reviews={4.8}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Development"
            title="Learning JavaScript With Imagination"
            author="David Millar"
            price="$15.00"
            reviews={5}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Development"
            title="Learning JavaScript With Imagination"
            author="David Millar"
            price="$15.00"
            reviews={5}
          />

          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Development"
            title="Learning JavaScript With Imagination"
            author="David Millar"
            price="$15.00"
            reviews={5}
          />
          <ItemCourses 
            imageSrc="/images/bgAuth.jpg"
            category="Development"
            title="Learning JavaScript With Imagination"
            author="David Millar"
            price="$15.00"
            reviews={5}
          />
           */}
         
        </div>
      </div>
    </div>
  );
}
