"use client";
import React, { useState } from 'react'
import {InputNoOutLine } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';

import { RiArrowDropDownLine, RiCloseLine, RiMenuLine, RiSearch2Line } from "@remixicon/react";



export default function HeaderAuth(props:IBackendRes<ILogin>) {
  const {session} = props;
  const router=useRouter();
  console.log(">>>check session: ",{session})
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // State cho mobile menu

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
          <DropdownMenuRadioItem  onClick={()=>{router.push("/ThanhTai")}} value="about"><a className="block w-full h-full"  >About Us</a></DropdownMenuRadioItem>
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
          <DropdownMenuRadioItem value="logout"><a href="" onClick={()=>signOut()}>Log out</a></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </>
    ),
  };
  return (
    <div className="h-16 w-full border-b-2 content-center text-center bg-white">
      <div id='sticky-header' className='w-full'>
        <div className='container min-w-full flex justify-between items-center'>
          <nav id='header-form' className='w-full flex justify-between px-4 md:px-10 items-center'>
            {/* Logo */}
            <div className='text-[#161439]'>
              <p>{session?.user?.email??"null"}</p>
            </div>
            {/* Menu Toggle Button (Hamburger for mobile) */}
            <div className="lg:hidden">
              <Button
                className="p-2 rounded-lg bg-[#ffc224] hover:bg-[#161439] text-[#161439] hover:text-white duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <RiCloseLine size={30} /> : <RiMenuLine size={30} />}
              </Button>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex lg:items-center`}>
              <ul className='flex justify-between text-[#161439] space-x-6'>
                {["Home", "Courses", "Pages", "Dashboard"].map((menuItem, index) => (
                  <li key={menuItem} className='flex items-center'>
                    <DropdownMenu open={openDropdown === index} onOpenChange={() => {}}>
                      <DropdownMenuTrigger
                        asChild
                        className='h-12'
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <Button
                          className='text-[#161439] hover:text-[#5751e1] '
                          variant="ghost"
                        >
                          {menuItem}
                          <RiArrowDropDownLine size={35} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {dropdownContents[menuItem as keyof typeof dropdownContents]}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search bar */}
            <div id='search-bar' className='hidden lg:flex outline outline-[0.1px] rounded-3xl outline-black'>
              <InputNoOutLine className='h-12 w-[300px] text-black' placeholder='Searching....' />
              <Button className='group rounded-full w-12 h-12 bg-[#ffc224] mr-[1px] my-px hover:bg-[#161439] duration-300'>
                <RiSearch2Line size={25} color='black' />
              </Button>
            </div>

            {/* Login Button */}
            <div className='hidden lg:flex'>
              <Button className='w-28 h-12 rounded-3xl font-bold bg-[#ffc224] text-[#161439] hover:bg-[#161439] hover:text-white duration-300'>
                Log in
              </Button>
            </div>
          </nav>

          {/* Mobile Popup Menu - Hiển thị khi kích thước nhỏ */}
          <div
            className={clsx(
              'fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out',
              { 'translate-x-0 w-1/3': menuOpen, 'translate-x-full': !menuOpen }
            )}
          >
            {/* Nội dung của popup */}
            <div className="p-6">
              <Button
                className="p-2 mb-4 rounded-lg bg-[#ffc224] hover:bg-[#161439] text-[#161439] hover:text-white duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <RiCloseLine size={30} />
              </Button>
              <ul className="flex flex-col space-y-4 text-[#161439]">
                {["Home", "Courses", "Pages", "Dashboard"].map((menuItem, index) => (
                  <li key={menuItem}>
                    <Button
                      variant="ghost"
                      className='w-full text-left hover:bg-[#ffc224] hover:text-white p-2'
                    >
                      {menuItem}
                    </Button>
                  </li>
                ))}
              </ul>
              {/* Search bar trong popup */}
              <div id='mobile-search' className='flex justify-center outline outline-[0.1px] rounded-3xl outline-black mt-4'>
                <InputNoOutLine className='h-12 w-full text-black' placeholder='Searching....' />
                <Button className='group rounded-full w-12 h-12 bg-[#ffc224] hover:bg-[#161439] duration-300'>
                  <RiSearch2Line size={25} color='black' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
