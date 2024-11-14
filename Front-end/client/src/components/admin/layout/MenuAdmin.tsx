"use client";
import React from "react";
import {
  RiBallPenLine,
  RiChat3Line,
  RiDashboardLine,
  RiFileList2Line,
  RiGitRepositoryLine,
  RiIdCardLine,
  RiMegaphoneLine,
  RiMenu2Line,
  RiQuestionLine,
  RiUserStarLine,
} from "@remixicon/react";
import { RiSettings3Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
interface IProp {
  _id?: string; // Expecting an id parameter in the URL
  role?: string;
}

export default function MenuAdmin(props: IProp) {
  const { _id, role } = props;
  const router = useRouter();
  return (
    <div className=" lg:w-1/4 ">
      <div className="bg-white p-4 rounded-s-lg shadow-lg">
        <ul className="space-y-2 p-3">
          <h2 className="font-semibold text-gray-500 p-1">
            THỐNG KÊ
          </h2>
          <div
            className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300"
            onClick={() => {
              router.push(`/Admin/dashboard/${_id}`);
            }}
          >
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiDashboardLine
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Dashboard
              </span>
            </li>
          </div>

          <div
            className="bg-gray-100 hover:bg-[#f9f8ff] rounded-lg w-full p-3 transition duration-300"
            onClick={() => {
              router.push(`/Admin/account/id/${_id}`);
            }}
          >
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiIdCardLine
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Thông tin cá nhân
              </span>
            </li>
          </div>

          <div
            className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300"
            onClick={() => {
              router.push(`/Admin/enrolledCourses/${_id}`);
            }}
          >
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiGitRepositoryLine
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Khoá học đã tham gia
              </span>
            </li>
          </div>

          <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiFileList2Line
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Khoá học yêu  thích
              </span>
            </li>
          </div>

          <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiUserStarLine
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Đánh giá
              </span>
            </li>
          </div>

          <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiQuestionLine
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Bài kiểm tra đã làm
              </span>
            </li>
          </div>
        </ul>
        {role === "Lecturer" ? (
          <div>
            <ul className="space-y-2 p-3">
              <h2 className="font-semibold text-gray-500 p-1">GIẢNG VIÊN</h2>
              <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
                <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
                  <RiBallPenLine
                    size={25}
                    className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
                  />
                  <span className="group-hover:text-indigo-700 transition duration-300" onClick={()=>{router.push(`/Admin/myCourses/${_id}`)}}>
                    Khoá học của tôi
                  </span>
                </li>
              </div>
              <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
                <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
                  <RiMegaphoneLine
                    size={25}
                    className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
                  />
                  <span className="group-hover:text-indigo-700 transition duration-300">
                    Thông báo
                  </span>
                </li>
              </div>
              <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
                <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
                  <RiChat3Line
                    size={25}
                    className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
                  />
                  <span className="group-hover:text-indigo-700 transition duration-300">
                    Bài kiểm tra
                  </span>
                </li>
              </div>
              <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
                <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
                  <RiMenu2Line
                    size={25}
                    className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
                  />
                  <span className="group-hover:text-indigo-700 transition duration-300">
                    Assignment
                  </span>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
        {role === "Admin" ? (
          <div>
            <ul className="space-y-2 p-3">
              <h2 className="font-semibold text-gray-500 p-1">QUẢN TRỊ VIÊN</h2>
              <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300" onClick={()=>{router.push('/Admin/managerUser')}}>
                <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
                  <RiBallPenLine
                    size={25}
                    className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
                  />
                  <span className="group-hover:text-indigo-700 transition duration-300">
                    Quản lí người dùng
                  </span>
                </li>
              </div>
            <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
                <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
                  <RiBallPenLine
                    size={25}
                    className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
                  />
                  <span className="group-hover:text-indigo-700 transition duration-300">
                    Quản lí khoá học
                  </span>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <div></div>
        )}

        <ul className="space-y-2 p-3">
          <h2 className="font-semibold text-gray-500 p-1">THÊM</h2>
          <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300" onClick={()=>{router.push('/')}}>
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiSettings3Line
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Quay về trang chủ
              </span>
            </li>
          </div>
          <div className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300">
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiSettings3Line
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Cài đặt
              </span>
            </li>
          </div>
          <div
            className="bg-gray-100 hover:bg-[#eeecfd] rounded-lg w-full p-3 transition duration-300"
            onClick={() => {
              signOut();
            }}
          >
            <li className="flex items-center gap-2 font-semibold text-gray-500 ml-2 group">
              <RiMenu2Line
                size={25}
                className="text-gray-500 group-hover:text-indigo-700 transition duration-300"
              />
              <span className="group-hover:text-indigo-700 transition duration-300">
                Đăng xuất
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
