import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function Page() {
  return (
    <div className='flex flex-grow bg-gray-100 min-h-screen'>
      {/* Sidebar with Accordion for Course Content */}
      <div className='w-1/4 bg-white p-4 shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Course Content</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="introduction">
            <AccordionTrigger className='text-xl flex justify-between items-center border-b border-slate-200 py-3 hover:bg-gray-50 transition-colors'>
              <span>Introduction</span>
              <div className='text-gray-500 text-xl ml-20'>1/3</div>
            </AccordionTrigger>
            <AccordionContent className='pl-4 text-sm'>
              <div className='space-y-2 text-xl'>
                <p className='mb-2'>Course Installation</p>
                <p className='mb-2'>Create a Simple React App</p>
                <p className='mb-2'>React for the Rest of Us</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="capacitance">
            <AccordionTrigger className='text-xl flex justify-between items-center border-b border-slate-200 py-3 hover:bg-gray-50 transition-colors'>
              <span>Capacitance and Inductance</span>
              <div className='text-gray-500 text-xl '>1/5</div>
            </AccordionTrigger>
            <AccordionContent className='pl-4 text-sm'>
              <div className='space-y-2 text-xl'>
                <p className='mb-2'>Understanding Capacitance</p>
                <p className='mb-2'>Practical Applications</p>
                <p className='mb-2'>Working with Inductors</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="final-audit">
            <AccordionTrigger className='text-xl flex justify-between items-center border-b border-slate-200 py-3 hover:bg-gray-50 transition-colors'>
              <span>Final Audit</span>
              <div className='text-gray-500 text-sm'>1/2</div>
            </AccordionTrigger>
            <AccordionContent className='pl-4 text-sm'>
              <div className='space-y-2 text-xl'>
                <p className='mb-2'>Review of Key Concepts</p>
                <p className='mb-2'>Final Project Walkthrough</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Main content area with video and course details */}
      <div className='w-3/4 p-6'>
        {/* Video Section */}
        <div className=' p-4 rounded-md shadow-md mb-6'>
          <iframe
            className="w-full h-96 rounded-md"
            src="https://www.youtube.com/embed/Ml4XCF-JS0k"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Navigation buttons */}
        <div className="flex space-x-3 mb-6 text-xl">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition">
            Overview
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-full transition">
            Instructors
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-full transition">
            Reviews
          </button>
        </div>

        {/* Course description section */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className="text-2xl font-semibold mb-3">Course Description</h2>
          <p className="text-gray-700 mb-4 text-xl">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <h3 className="text-2xl font-semibold mb-2">What you'll learn in this course?</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-xl">
            <li>Work with Core 6.0 Generation of data</li>
            <li>All the useful shortcuts</li>
            <li>Be able to create Flyers, Brochures, Advertisements</li>
            <li>How to work with Images and Text</li>
          </ul>
          <p className="text-gray-700 mt-4 text-xl">
            Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
