'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiTwitterFill } from '@remixicon/react'

export default function footerAuth() {
  return (
    <div id='main-footer'className='w-full h-full py-20 content-center bg-[#06042e] text-white '>
        <div className=' flex flex-wrap flex-row justify-between mr-[100px] ml-[100px] '>
          <div>
            <p>Logo</p>
            <p> Email </p>
            <div className='flex  ' >
              <div id='phone-number' className=''>+84</div>
              <div id='address'>Address</div>
            </div>
          </div>
          <div >
            <p className='text-2xl mb-4'>Home</p>
          <ul className='space-y-2.5'>
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Benefits</a></li>
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Our Courses</a></li>
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Our Testimonials</a></li>
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Our FAQ</a></li>
              </ul>
          </div> 
          <div className='list-none' >
          <p className='text-2xl mb-4 ' >About us</p>
          <ul className='space-y-2.5 ' >
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Achievements</a></li>
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Company</a></li>
              <li className='w-fit hover:underline hover:underline-offset-2 hover:text-[#ffc224] duration-300'><a href="#">Our Goals</a></li>
          </ul>
          </div>
          <div>
          <div className='list-none' >
          <p className='text-2xl mb-4 '>Social Profiles</p>
          <ul className='space-x-2.5 h-fit w-fit flex ' >
            <li> 
            <Button className=' group hover:bg-[#ffc224]' variant='icon_social'  >
              <RiFacebookBoxFill className='group-hover:fill-white duration-300'
              color='black'
              /> 
             </Button>
            </li>
            <li>
            <Button className=' group hover:bg-[#ffc224]' variant='icon_social' >
              <RiTwitterFill className='group-hover:fill-white duration-300'
              color='black'
              />
              </Button>
            </li>
            <li>
            <Button className=' group hover:bg-[#ffc224]' variant='icon_social' >
            <RiLinkedinBoxFill className='group-hover:fill-white duration-300'
            color='black'
            />
            </Button>
            </li>
          </ul>
          </div>

          </div  >
          <div className='list-none' >
            <p className='text-2xl mb-4' >Stay up to date</p>
          <Input placeholder='Your email address' ></Input>
          </div>
        </div>
        <div>
        <hr className="w-full h-[1px] mx-auto my-2 bg-gray-100 border-0 rounded  dark:bg-gray-700"/>
        <div className='font-light content-center flex justify-center ' >
        <p> @{new Date().getFullYear()} Create by Tortoise Team </p>
        </div>
        </div>
    </div>
  )
}
