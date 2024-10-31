import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionOverview from '@/components/client/lesson/section.overview';
import SectionInstructors from '@/components/client/lesson/section.instructors';
import SectionReviews from '@/components/client/lesson/section.reviews';

export default function Page() {
  return (
    <div className='flex flex-grow bg-gray-100 min-h-screen'>
      {/* Thanh nội dung khóa học */}
      <div className='w-1/4 bg-white p-8 shadow-lg'>
        <h2 className='text-3xl font-bold mb-8'>Nội dung khóa học</h2>
        <Accordion type="single" collapsible>

          <AccordionItem value="introduction">
            <AccordionTrigger className='text-2xl flex items-center border-b border-slate-200 py-4'>
              <span className='pr-64'>Giới thiệu</span>
              <div className='flex items-center ml-auto space-x-2'>
                <span className='text-gray-500 text-lg text-right '>1/3</span>
                <span >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600" >
                    <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className='pl-6 space-y-4 bg-blue-50 rounded-lg py-4'>
              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'>ReactJS là gì? </p>
                </div>
                <span className='text-gray-500 text-lg mr-6'>10:41</span>
              </div>

              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'> SPA/ MPA là gì</p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>22:20 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>

              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'>Ưu điểm của SPA </p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>01:48 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>

            </AccordionContent>

          </AccordionItem>

          <AccordionItem value="react">
            <AccordionTrigger className='text-2xl flex items-center border-b border-slate-200 py-4'>
              <span className='pr-40'>React, ReactDOM</span>
              <div className='flex items-center ml-auto space-x-2'>
                <span className='text-gray-500 text-lg text-right '>1/4</span>
                <span >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600" >
                    <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className='pl-6 space-y-4 bg-blue-50 rounded-lg py-'>
              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'>Document.createElement() để làm gì </p>
                </div>
                <span className='text-gray-500 text-lg mr-6'>10:02</span>
              </div>

              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'> Cách thêm React vào Website</p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>14:51 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>

              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'>ReactDOM là gì? Tại sao phải sử dụng </p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>11:09 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>


              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'> Sử dụng ReactDOM phiên bản 18 </p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>11:09 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>


            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="Create">
            <AccordionTrigger className='text-2xl flex items-center border-b border-slate-200 py-4'>
              <span className='pr-40'>Create React App</span>
              <div className='flex items-center ml-auto space-x-2'>
                <span className='text-gray-500 text-lg text-right '>1/3</span>
                <span >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600" >
                    <path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className='pl-6 space-y-4 bg-blue-50 rounded-lg py-'>
              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'>NodeJS là gì? </p>
                </div>
                <span className='text-gray-500 text-lg mr-6'>11:39</span>
              </div>

              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'> Tạo dự án với React + Webpack</p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>31:15 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>

              <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
                <div className='flex items-center space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-blue-400">
                    <path d="M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM5 5V19H19V5H5ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                  <p className='text-xl'> Nâng cấp React & ReactDON lên 18</p>
                </div>
                <span className='flex items-center space-x-1 text-gray-500 text-lg'>
                  <span>04:19 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-indigo-600  ">
                    <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path></svg>
                </span>
              </div>

            </AccordionContent>

          </AccordionItem>

        </Accordion>
      </div>

      {/* Main content area with video and course details */}
      <div className='w-3/4 bg-white p-6'>
        <div className='mb-6'>
          <iframe
            className="w-full h-[600px] rounded-md"
            src="https://www.youtube.com/embed/Ml4XCF-JS0k"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Navigation buttons */}
        {/* <div className="flex space-x-4 text-2xl">
          <button >
            Overview
          </button>
          <button className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full">
            Instructors
          </button>
          <button className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-full">
            Reviews
          </button>
        </div> */}
        <Tabs defaultValue="Overview" >
          <TabsList className='h-18 py- px-10 sm:mb-6'>
            <TabsTrigger value="Overview" className="bg-gray-200 sm:text-xl text-gray-600  py-3 px-8  rounded-full">
              Overview
            </TabsTrigger>
            <TabsTrigger value="Instructors" className="bg-gray-200 sm:text-xl ml-10 text-gray-600  py-3 px-8  rounded-full">
              Instructors
            </TabsTrigger>
            <TabsTrigger value="Reviews" className="bg-gray-200 sm:text-xl ml-10 text-gray-600  py-3 px-8 rounded-full">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Overview" className="sm:w-full ">
            <SectionOverview />
          </TabsContent>
          <TabsContent value="Instructors" className="sm:w-full">
            <SectionInstructors />
          </TabsContent>
          <TabsContent value="Reviews" >
            <SectionReviews />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 