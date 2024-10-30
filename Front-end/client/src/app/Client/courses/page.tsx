import Image from "next/image";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import SectionContentCourse from "@/components/client/courses/section.content.course";
import { auth } from "@/auth";
import { sendRequest } from "@/utils/api";
interface IProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function Page(props: IProps) {
  const session = await auth();
  const current = props?.searchParams?.current ?? 1;
  const pageSize = props?.searchParams?.pageSize ?? 9;
  // Chuyển đổi để chỉ lấy giá trị string hoặc number
  const queryParams = {
    current: typeof current === "string" ? current : current.toString(),
    pageSize: typeof pageSize === "string" ? pageSize : pageSize.toString(),
  };
  const res = await sendRequest<IBackendRes<any>>({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/courses`,
    queryParams,
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
    nextOption: {
      next: { tag: ["list-courses"] }, //call revalidate Tag
    },
  });

  return (
    <div className="bg-white py-8 px-4 relative">
      <div className="relative z-10 text-left mb-8">
        <section
          id="banner"
          className="w-full flex flex-col md:flex-row bg-banner-main pt-2"
        >
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-around w-full text-black">
              <div className="content-center w-full md:w-[50%] lg:w-[30%] text-center md:text-left px-4 md:px-0">
                <h3 className="text-[36px] md:text-[44px] lg:text-[54px] pb-4">
                  Không ngừng <b>học tập</b> và rèn luyện
                </h3>
                <p className="font-thin text-[#7b798c]">
                  Mỗi hành trình dạy và học đều là duy nhất. Theo dõi Chúng tôi
                  sẽ giúp bạn định hướng con đường của mình.
                </p>

                <div className="pt-10">
                  <Button className="w-[200px] md:w-[250px]" variant="btn_home">
                    <a href="#">Bắt đầu ngay thôi</a>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-[50%] lg:w-[30%] flex justify-center md:justify-end">
                <Image
                  src="/images/pic1-removebg-preview.png"
                  width={500}
                  height={500}
                  alt="Hello"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container  mx-auto flex flex-col md:flex-row mt-6 lg:mt-32">
        {/* Sidebar */}
        <div className="md:w-1/5 lg:w-1/4 p-4 md:pr-6">
          {/* Filter Section */}
          <div className="bg-gray-100 p-4 rounded shadow-lg mb-6">
            <h2 className="font-bold mb-4 text-xl">Thể loại</h2>
            <ul className="space-y-2 text-base">
              <li>
                <input type="checkbox" /> Tất cả danh mục
              </li>
              <li>
                <input type="checkbox" /> Công nghệ
              </li>
              <li>
                <input type="checkbox" /> Kinh tế
              </li>
              <li>
                <input type="checkbox" /> Giáo dục
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-lg mb-6">
            <h2 className="font-bold mb-4 text-xl">Ngôn ngữ</h2>
            <ul className="space-y-2 text-base">
              <li>
                <input type="checkbox" /> Tiếng Việt
              </li>
              <li>
                <input type="checkbox" /> Tiếng Anh
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-lg mb-6">
            <h2 className="font-bold mb-4 text-xl">Giá</h2>
            <ul className="space-y-2 text-base">
              <li>
                <input type="checkbox" /> Tất cả giá
              </li>
              <li>
                <input type="checkbox" /> Miễn phí
              </li>
              <li>
                <input type="checkbox" /> Trả
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-lg mb-6">
            <h2 className="font-bold mb-4 text-xl">Cấp độ</h2>
            <ul className="space-y-2 text-base">
              <li>
                <input type="checkbox" /> Tất cả
              </li>
              <li>
                <input type="checkbox" /> Người mới bắt đầu
              </li>
              <li>
                <input type="checkbox" /> Trung cấp
              </li>
              <li>
                <input type="checkbox" /> Cao
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow-lg">
            <h2 className="font-bold mb-4 text-xl">Xếp hạng</h2>
            <ul className="space-y-2 text-base">
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(1)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Content Section */}
          <SectionContentCourse
            courses={res?.data?.result ?? []}
            meta={res?.data?.meta}
          />
      </div>
    </div>
  );
}
