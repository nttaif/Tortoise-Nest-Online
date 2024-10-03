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
import { ChevronsUpDown, Plus, X } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
            <div className='max-lg:hidden' >
              <ul className='flex justify-between text-[#161439] '>
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
            <MobileNavBar />
            <div id='search-bar' className='flex outline outline-[0.1px] rounded-3xl outline-black ' >
              <InputNoOutLine className='h-12 w-[400px] text-black  ' placeholder='Searching....' />
              <Button className=' group rounded-full w-12 h-12 bg-[#ffc224] mr-[1px] my-px hover:bg-[#161439] duration-300  '>
              <RiSearch2Line className=''
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
const MobileNavBar = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  return(
  <div className='fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 sm:hidden'>
    <div className='h-full w-[50%] bg-white px-4 py-4' >
      <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[250px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
     
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      </CollapsibleContent>
    </Collapsible>
    </div>
  </div>
  );

};
