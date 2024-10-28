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
  DropdownMenuSeparator,
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
  const [position, setPosition] = React.useState("bottom")

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
          <DropdownMenuRadioItem value="about"><a href="/ThanhTai" className="block w-full h-full"  >About Us</a></DropdownMenuRadioItem>
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
    <div className="h-16 w-full border-b-2 content-center text-center bg-white sticky top-0 z-50 ">
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
                  <li key={menuItem} className='flex items-center  '>
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
                  <div className='flex items-center pl-4 '>
                    <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75V13.25ZM16.992 14.75C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25V14.75ZM14.742 11C14.742 10.5858 14.4062 10.25 13.992 10.25C13.5778 10.25 13.242 10.5858 13.242 11H14.742ZM13.242 17C13.242 17.4142 13.5778 17.75 13.992 17.75C14.4062 17.75 14.742 17.4142 14.742 17H13.242ZM1 6.4H1.75H1ZM1 1.6H1.75H1ZM6.4 1V1.75V1ZM7 1.6H6.25H7ZM6.4 7V6.25V7ZM1 16.4H1.75H1ZM1 11.6H1.75H1ZM6.4 11V11.75V11ZM7 11.6H6.25H7ZM6.4 17V17.75V17ZM1.6 17V17.75V17ZM11 6.4H11.75H11ZM11 1.6H11.75H11ZM11.6 1V0.25V1ZM16.4 1V1.75V1ZM17 1.6H17.75H17ZM17 6.4H17.75H17ZM16.4 7V6.25V7ZM10.992 14.75H13.992V13.25H10.992V14.75ZM16.992 13.25H13.992V14.75H16.992V13.25ZM14.742 14V11H13.242V14H14.742ZM13.242 14V17H14.742V14H13.242ZM1.75 6.4V1.6H0.25V6.4H1.75ZM1.75 1.6C1.75 1.63978 1.7342 1.67794 1.70607 1.70607L0.645406 0.645406C0.392232 0.89858 0.25 1.24196 0.25 1.6H1.75ZM1.70607 1.70607C1.67794 1.7342 1.63978 1.75 1.6 1.75V0.25C1.24196 0.25 0.89858 0.392232 0.645406 0.645406L1.70607 1.70607ZM1.6 1.75H6.4V0.25H1.6V1.75ZM6.4 1.75C6.36022 1.75 6.32207 1.7342 6.29393 1.70607L7.35459 0.645406C7.10142 0.392231 6.75804 0.25 6.4 0.25V1.75ZM6.29393 1.70607C6.2658 1.67793 6.25 1.63978 6.25 1.6H7.75C7.75 1.24196 7.60777 0.898581 7.35459 0.645406L6.29393 1.70607ZM6.25 1.6V6.4H7.75V1.6H6.25ZM6.25 6.4C6.25 6.36022 6.2658 6.32207 6.29393 6.29393L7.35459 7.35459C7.60777 7.10142 7.75 6.75804 7.75 6.4H6.25ZM6.29393 6.29393C6.32207 6.2658 6.36022 6.25 6.4 6.25V7.75C6.75804 7.75 7.10142 7.60777 7.35459 7.35459L6.29393 6.29393ZM6.4 6.25H1.6V7.75H6.4V6.25ZM1.6 6.25C1.63978 6.25 1.67793 6.2658 1.70607 6.29393L0.645406 7.35459C0.898581 7.60777 1.24196 7.75 1.6 7.75V6.25ZM1.70607 6.29393C1.7342 6.32207 1.75 6.36022 1.75 6.4H0.25C0.25 6.75804 0.392231 7.10142 0.645406 7.35459L1.70607 6.29393ZM1.75 16.4V11.6H0.25V16.4H1.75ZM1.75 11.6C1.75 11.6398 1.7342 11.6779 1.70607 11.7061L0.645406 10.6454C0.392231 10.8986 0.25 11.242 0.25 11.6H1.75ZM1.70607 11.7061C1.67793 11.7342 1.63978 11.75 1.6 11.75V10.25C1.24196 10.25 0.898581 10.3922 0.645406 10.6454L1.70607 11.7061ZM1.6 11.75H6.4V10.25H1.6V11.75ZM6.4 11.75C6.36022 11.75 6.32207 11.7342 6.29393 11.7061L7.35459 10.6454C7.10142 10.3922 6.75804 10.25 6.4 10.25V11.75ZM6.29393 11.7061C6.2658 11.6779 6.25 11.6398 6.25 11.6H7.75C7.75 11.242 7.60777 10.8986 7.35459 10.6454L6.29393 11.7061ZM6.25 11.6V16.4H7.75V11.6H6.25ZM6.25 16.4C6.25 16.3602 6.2658 16.3221 6.29393 16.2939L7.35459 17.3546C7.60777 17.1014 7.75 16.758 7.75 16.4H6.25ZM6.29393 16.2939C6.32207 16.2658 6.36022 16.25 6.4 16.25V17.75C6.75804 17.75 7.10142 17.6078 7.35459 17.3546L6.29393 16.2939ZM6.4 16.25H1.6V17.75H6.4V16.25ZM1.6 16.25C1.63978 16.25 1.67793 16.2658 1.70607 16.2939L0.645406 17.3546C0.898581 17.6078 1.24196 17.75 1.6 17.75V16.25ZM1.70607 16.2939C1.7342 16.3221 1.75 16.3602 1.75 16.4H0.25C0.25 16.758 0.392231 17.1014 0.645406 17.3546L1.70607 16.2939ZM11.75 6.4V1.6H10.25V6.4H11.75ZM11.75 1.6C11.75 1.63978 11.7342 1.67793 11.7061 1.70607L10.6454 0.645406C10.3922 0.898581 10.25 1.24196 10.25 1.6H11.75ZM11.7061 1.70607C11.6779 1.7342 11.6398 1.75 11.6 1.75V0.25C11.242 0.25 10.8986 0.392231 10.6454 0.645406L11.7061 1.70607ZM11.6 1.75H16.4V0.25H11.6V1.75ZM16.4 1.75C16.3602 1.75 16.3221 1.7342 16.2939 1.70607L17.3546 0.645406C17.1014 0.392231 16.758 0.25 16.4 0.25V1.75ZM16.2939 1.70607C16.2658 1.67793 16.25 1.63978 16.25 1.6H17.75C17.75 1.24196 17.6078 0.898581 17.3546 0.645406L16.2939 1.70607ZM16.25 1.6V6.4H17.75V1.6H16.25ZM16.25 6.4C16.25 6.36022 16.2658 6.32207 16.2939 6.29393L17.3546 7.35459C17.6078 7.10142 17.75 6.75804 17.75 6.4H16.25ZM16.2939 6.29393C16.3221 6.2658 16.3602 6.25 16.4 6.25V7.75C16.758 7.75 17.1014 7.60777 17.3546 7.35459L16.2939 6.29393ZM16.4 6.25H11.6V7.75H16.4V6.25ZM11.6 6.25C11.6398 6.25 11.6779 6.2658 11.7061 6.29393L10.6454 7.35459C10.8986 7.60777 11.242 7.75 11.6 7.75V6.25ZM11.7061 6.29393C11.7342 6.32207 11.75 6.36022 11.75 6.4H10.25C10.25 6.75804 10.3922 7.10142 10.6454 7.35459L11.7061 6.29393Z" fill="#5751e1"></path></svg>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className='text-black h-12' variant="ghost">
                          Categories
                          <RiArrowDropDownLine size={35} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 h-full text-lg p-6 ">
                        <DropdownMenuRadioItem value="top">Businness</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Data Science</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Art & Design</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Marketing</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Finance</DropdownMenuRadioItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Vertical divider */}
                    <div className='border-l h-8 mx-1 border-gray-300'></div>

                    <InputNoOutLine className='h-12 w-[300px] text-black' placeholder='Searching....' />
                    
                    <Button className='group rounded-full w-12 h-12 bg-[#ffc224] mr-[1px] my-px hover:bg-[#161439] duration-300'>
                      <RiSearch2Line size={25} color='black' />
                    </Button>
                  </div>
                </div>

            {/* Login Button */}
            <div className='hidden lg:flex'>
              <Button onClick={()=>{router.push('/login')}} className='w-28 h-12 rounded-3xl font-bold bg-[#ffc224] text-[#161439] hover:bg-[#161439] hover:text-white duration-300'>
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
