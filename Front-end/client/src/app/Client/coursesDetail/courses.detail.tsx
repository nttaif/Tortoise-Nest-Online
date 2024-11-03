"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionInstructors from "@/components/client/lesson/section.instructors";
import SectionReviews from "@/components/client/lesson/section.reviews";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Courses, User } from "@/types/next-auth";

interface IProps{
  courses:Courses | undefined;
  lecturer:User | undefined;
}
export default function CoursesDetail(props:IProps) {
  const {courses,lecturer} = props;
  const router = useRouter();
  const courseInfo = [
    { label: "Mức độ:", value: "Chuyên gia" },
    { label: "Khoảng thời gian:", value: "11h 20m" },
    { label: "Bài học:", value: "12" },
    { label: "Câu đố:", value: "145" },
    { label: "Chứng chỉ:", value: "Đúng" },
    { label: "Tốt nghiệp:", value: "25K" },
  ];
  return (
    <div>
      <div className="container mx-auto p-6 lg:p-10 min-w-[320px] justify-center">
        <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0">
          {/* Cột trái - Hình ảnh và nội dung */}
          <div className="relative lg:col-span-2">
            {/* Hình ảnh khóa học */}
            <div className=" relative w-full bg-red-200 cursor-pointer rounded-[10px]">
              <CldImage
                className="h-[600px] rounded-[10px]"
                src={
                  courses?.image ??
                  "https://res.cloudinary.com/dhogczuic/image/upload/v1730476010/xuorql986fcsqkoklmf5.jpg"
                }
                alt={courses?.name}
                width={1920}
                height={1080}
              />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
            </div>
            {/* Nội dung dưới hình ảnh */}
            <div className="p-6 bg-white rounded-b-lg">
              {/* Nút phát triển và đánh giá */}
              <div className="flex items-center space-x-2 mb-4">
                <button className="bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-600 font-bold py-2 px-4 rounded-full">
                  {courses?.category ?? "Không có thông tin"}
                </button>
                <span className="text-yellow-500">★ {courses?.rating} Đánh giá</span>
              </div>
              {/* Thông tin khóa học */}
              <h1 className="text-2xl font-bold mb-4">
                {courses?.name ?? "Không có thông tin"}
              </h1>
              {/* Thông tin người hướng dẫn */}
              <div className="flex items-center mb-6">
                <CldImage
                  src={lecturer?.image?? "/images/hinh1.jpg"}
                  alt="Instructor"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-gray-600 ml-2">
                  By {lecturer?.name} •|• {courses?.createdAt} •|• {courses?.totalStudent ?? 0} Học viên
                </p>
              </div>
            </div>
            {/* Navigation change content */}
            <Tabs defaultValue="Overview">
              <TabsList className="justify-center m space-x-4 mb-6">
                <TabsTrigger
                  value="Overview"
                  className="bg-gray-200 sm:text-xl text-gray-600 py-3 px-6 rounded-full transition duration-200 hover:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="Instructors"
                  className="bg-gray-200 sm:text-xl text-gray-600 py-3 px-6 rounded-full transition duration-200  hover:text-white"
                >
                  Instructors
                </TabsTrigger>
                <TabsTrigger
                  value="Reviews"
                  className="bg-gray-200 sm:text-xl text-gray-600 py-3 px-6 rounded-full transition duration-200  hover:text-white"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="Overview" className="sm:w-[1050px]">
                {/* <div className="mx-auto rounded-xl overflow-hidden bg-white p-6  border shadow-md duration-300 hover:shadow-lg transition-all">
                  
                </div> */}
                <div className="flex mx-auto rounded-xl overflow-hidden bg-white p-6  border shadow-md duration-300 hover:shadow-lg transition-all">
                  {/* Profile Image Section */}
                  <div className="flex-shrink-0">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Mô tả khóa học
                    </h2>
                    <p className="text-gray-600 text-sm  w-[900px] overflow-hidden">
                      {courses?.description}
                    </p>
                    <h2
                      id="curriculum"
                      className="text-xl font-bold mt-6 mb-4 text-gray-800"
                    >
                      Bạn sẽ học được gì trong khóa học này
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Làm việc với màu sắc, độ dốc và lưới</li>
                      <li>Tất cả các phím tắt hữu ích</li>
                      <li>Có khả năng tạo tờ rơi, áp phích, v.v.</li>
                      <li>
                        Giao diện người dùng tuyệt vời cho ứng dụng của bạn
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Instructors" className="sm:w-[1050px]">
                <SectionInstructors lecturer={lecturer} />
              </TabsContent>
              <TabsContent value="Reviews" className="sm:w-[1050px]">
                <SectionReviews />
              </TabsContent>
            </Tabs>
          </div>

          {/* Phần bên phải cho Quick Contact */}
          <div className="lg:top-0 lg:right-0 lg:w-2/3 w-full max-w-sm p-4 z-50">
            {/* Cột phải - Thông tin khóa học */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-400 flex flex-col">
              {/* Nhúng video */}
              <h2 className="text-xl font-bold mb-2">Xem trước khóa học</h2>
              <div className="relative pb-[56.25%] h-0 mb-4">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/Ml4XCF-JS0k"
                  title="Course Preview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Phần giá */}
              <div className="bg-purple-600 text-white text-center rounded-lg py-4 mb-4">
                <p className="text-xl font-bold">Học phí khóa học này:</p>
                <p className="text-3xl font-bold">Miễn phí</p>
                <p className="line-through text-gray-300">$32.00</p>
              </div>
              {/* Thông tin chi tiết khóa học */}
              <div className="text-gray-600 space-y-3 mb-4">
                {courseInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between border-b border-gray-300 py-1"
                  >
                    <span className="font-semibold">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
              {/* Hình thức thanh toán */}
              <div className="text-center mb-4">
                <p className="font-bold text-gray-700 mb-2">
                  Thanh toán an toàn:
                </p>
                <div className="flex justify-center space-x-2">
                  <Image
                    src="/images/payment.webp"
                    alt="Payment Logos"
                    width={180}
                    height={20}
                  />
                </div>
              </div>
              {/* Chia sẻ khóa học */}
              <div className="text-center mb-4">
                <p className="font-bold text-gray-700 mb-2">
                  Chia sẻ khóa học này:
                </p>
                <div className="flex justify-center space-x-3 text-gray-600">
                  <FaFacebook className="hover:text-blue-600 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  <FaWhatsapp className="hover:text-green-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  <FaYoutube className="hover:text-red-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>
              </div>
              {/* Nút bấm */}
              <Button
                variant={"btn_home"}
                className="mx-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full w-2/3 flex items-center justify-center"
                onClick={() => {
                  router.push(`/Client/coursesLesson/${courses?._id}`);
                }}
              >
                <span>Tham gia</span>
                <FaArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
