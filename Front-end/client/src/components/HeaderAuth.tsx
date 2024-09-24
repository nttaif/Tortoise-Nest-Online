"use client";
import React from 'react'
import { Input, InputNoOutLine } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiArrowDropDownLine, RiSearch2Line } from "@remixicon/react";

export default function HeaderAuth() {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  const dropdownContents = {
    Home: (
      <>
        <DropdownMenuLabel>Home</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="null" onValueChange={() => {}}>
          <DropdownMenuRadioItem value="top"><a href=""className="block w-full h-full">Top</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom"><a href=""className="block w-full h-full">Bottom</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right"><a href=""className="block w-full h-full">Right</a></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    ),
    Courses: (
      <>
        <DropdownMenuLabel>Courses</DropdownMenuLabel>
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="course1"><a href=""className="block w-full h-full">Course 1</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="course2"><a href=""className="block w-full h-full">Course 2</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="course3"><a href=""className="block w-full h-full">Course 3</a></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    ),
    Pages: (
      <>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="about"><a href="" className="block w-full h-full" >About Us</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="contact"><a href=""className="block w-full h-full">Contact Us</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="faq"><a href=""className="block w-full h-full">FAQ</a></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    ),
    Dashboard: (
      <>
        <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="profile"><a href="">Profile</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="settings"><a href="">Setting</a></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="logout"><a href="">Log out</a></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    ),
  };
  return (
    <div className="h-16 w-full border-b-2 content-center text-center bg-white">
      <div id='sticky-header' className='w-full' >
        <div className='container min-w-full flex  '>
          <nav id='header-form' className='w-full flex justify-between pl-10 pr-10 items-center '>
            <div className='text-[#161439]'>
              <p>Logo Name</p>
            </div>
            <div>
              <ul className='flex justify-between text-[#161439]'>
                {["Home", "Courses", "Pages", "Dashboard"].map((menuItem,index) => (
                  <li key={menuItem} className='flex items-center '> 
                    <DropdownMenu open={openDropdown === index} 
                      onOpenChange={() => {}} 
                      >
                      <DropdownMenuTrigger asChild className='h-12' >
                        <Button className='text-[#161439] hover:text-[#5751e1] '
                          variant="ghost"
                          onMouseEnter={() => setOpenDropdown(index)} 
                          onMouseLeave={() => setOpenDropdown(null)}  
                        >
                          {menuItem}
                          <RiArrowDropDownLine 
                          size={35}
                          />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        onMouseEnter={() => setOpenDropdown(index)}  
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {dropdownContents[menuItem as keyof typeof dropdownContents]} {/* Ép kiểu menuItem */}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ))}
              </ul>
            </div>
            <div id='search-bar' className='flex outline outline-[0.1px] rounded-3xl outline-black ' >
              <InputNoOutLine className='h-12 w-[400px] text-black  ' placeholder='Searching....' />
              <Button className=' group rounded-full w-12 h-12 bg-[#ffc224] mr-[1px] my-px hover:bg-[#161439] duration-300  '>
              <RiSearch2Line className='group-hover:fill-white'
              size={25}
              color='black'
              />
              </Button>
            </div>
            <div>
              <Button className='w-28 h-12 rounded-3xl font-bold  bg-[#ffc224] text-[#161439] hover:bg-[#161439] hover:text-[#e6eaef] duration-300 '>Log in</Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

