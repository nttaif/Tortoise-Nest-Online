"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export default function HeaderAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName); // Cập nhật item đang được chọn
  };
  const sidebarItems = [
    { name: "Trang chủ", icon: HomeIcon },
    { name: "Table", icon: TableIcon },
    { name: "Graph", icon: GraphIcon },
  ];
  return (
    <div>
      {/* <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10"> */}
      <div
        className={clsx(
          "fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10",
          isSidebarOpen ? "ml-56 w-1/2" : ""
        )}
      >
        <div className="logo ml-12 text-black dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
          TNO
        </div>
        <div className="grow h-full flex items-center justify-center"></div>
        <div className="flex-none h-full text-center flex items-center justify-center">
          <div className="flex space-x-3 items-center px-3">
            <div className="flex-none flex justify-center">
              <div className="w-8 h-8 flex ">
                <Image
                  src="/images/pic1-removebg-preview.png"
                  width={50}
                  height={50}
                  alt="profile"
                  className="shadow rounded-full object-cover"
                />
              </div>
            </div>

            <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
              John Doe
            </div>
          </div>
        </div>
      </div>
      {/* Side bar */}
      <aside
        className={clsx(
          "fixed transform transition-transform ease-in-out duration-1000 z-50 h-screen bg-[#1E293B] w-60",
          isSidebarOpen ? "translate-x-0" : "-translate-x-48"
        )}
      >
        <div
          className={clsx(
            "max-toolbar w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B] absolute top-2 rounded-full h-12",
            isSidebarOpen ? "translate-x-0" : "translate-x-24 scale-x-0"
          )}
        >
          <div className="flex pl-4 items-center space-x-2 ">
            <div>
              <div className="moon text-white hover:text-blue-500 dark:hover:text-[#38BDF8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </div>
              <div className="sun hidden text-white hover:text-blue-500 dark:hover:text-[#38BDF8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-white hover:text-blue-500 dark:hover:text-[#38BDF8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
          </div>
          <div className="flex text-white items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-yellow-500 to-purple-500  pl-10 pr-2 py-1 rounded-full   ">
            <div className="transform ease-in-out duration-300 mr-12">TNO</div>
          </div>
        </div>
        <div
          onClick={toggleSidebar}
          className={clsx(
            "-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-yellow-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>

        {/* sidebar item */}
        {/* Sidebar Full */}
        <div
          className={clsx(
            "max text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]",
            isSidebarOpen ? "flex" : "hidden"
          )}
        >
          {sidebarItems.map(({ name, icon: Icon }) => (
            <div
              key={name}
              onClick={() => handleItemClick(name)}
              className={clsx(
                "hover:ml-4 w-full p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer",
                activeItem === name
                  ? "bg-yellow-500 ml-4 text-white"
                  : "bg-[#1E293B] hover:bg-[#374151] hover:text-purple-500 dark:hover:text-blue-500"
              )}
            >
              <Icon className="w-4 h-4" />
              <div>{name}</div>
            </div>
          ))}
        </div>

        {/* Sidebar Mini */}
        <div
          className={clsx(
            "mini mt-20 flex-col space-y-2 w-full h-[calc(100vh)]",
            isSidebarOpen ? "hidden" : "flex"
          )}
        >
          {sidebarItems.map(({ name, icon: Icon }) => (
            <div
              key={name}
              onClick={() => handleItemClick(name)}
              className={clsx(
                "hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer",
                activeItem === name
                  ? "bg-yellow-500 ml-4 text-white"
                  : "bg-[#1E293B] hover:bg-[#374151] hover:text-purple-500 dark:hover:text-blue-500"
              )}
            >
              <Icon className="w-4 h-4" />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TableIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
}

function GraphIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
      />
    </svg>
  );
}
