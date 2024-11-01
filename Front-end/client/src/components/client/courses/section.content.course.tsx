"use client";
import React, { useEffect, useState } from "react";
import ItemCourses from "@/components/popular/ItemCourses";
import ItemCourses2 from "@/components/ui/ItemCourses2";
import { Courses } from "@/types/next-auth";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  courses: Courses[] | [];
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
}

export default function SectionContentCourse(props: IProps) {
  const { courses, meta } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isShowList, setShowList] = useState(false);
  const [currentPage, setCurrentPage] = useState(meta.current);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "all",
  ]);
  useEffect(() => {
    filterCourses();
  }, [courses, selectedCategories]);

  const onChange = (page: number, pageSize?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("current", page.toString());
    if (pageSize) params.set("pageSize", pageSize.toString());
    router.replace(`${pathname}?${params.toString()}`);
    setCurrentPage(page);
  };
  const filterCourses = () => {
    if (selectedCategories.includes("all")) {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(
        courses.filter((course) => selectedCategories.includes(course.category))
      );
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (category === "all") {
        return prevCategories.includes("all") ? [] : ["all"];
      } else {
        const updatedCategories = prevCategories.includes("all")
          ? [category]
          : prevCategories.includes(category)
          ? prevCategories.filter((cat) => cat !== category)
          : [...prevCategories, category];
        return updatedCategories.length === 0 ? ["all"] : updatedCategories;
      }
    });
    setCurrentPage(1);
  };

  return (
    <>
      <div className="md:w-1/5 lg:w-1/4 p-4 md:pr-6">
        {/* Filter Section */}
        <div className="bg-gray-100 p-4 rounded shadow-lg mb-6">
          <h2 className="font-bold mb-4 text-xl">Thể loại</h2>
          <ul className="space-y-2 text-base">
            <li>
              <input type="checkbox" /> Tất cả danh mục
            </li>
            <li>
              <input
                type="checkbox"
                onChange={() => handleCategoryChange("Technology")}
              />{" "}
              Công nghệ
            </li>
            <li>
              <input
                type="checkbox"
                onChange={() => handleCategoryChange("Economy")}
              />{" "}
              Kinh tế
            </li>
            <li>
              <input
                type="checkbox"
                onChange={() => handleCategoryChange("Education")}
              />{" "}
              Giáo dục
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
      <div className="md:w-4/5 lg:w-3/4">
        <div className="flex justify-between items-center mb-6 ">
          <h2 className=" text-gray-600 ml-5 font-light">Hiển thị kết quả</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600"> Sắp xếp: </span>
            <div className="relative">
              <select className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="popularity">Sắp xếp theo mức độ phổ biến</option>
                <option value="price">Sắp xếp theo giá</option>
                <option value="rating">Sắp xếp theo đánh giá</option>
              </select>
            </div>
            <div
              onClick={() => setShowList(false)}
              className="bg-white hover:bg-blue-300 cursor-pointer p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {/* Grid icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"></path>
              </svg>
            </div>
            <div
              onClick={() => setShowList(true)}
              className="mr-10 bg-white hover:bg-blue-300 cursor-pointer p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {/* List icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Grid/List view content */}
        {!isShowList ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <ItemCourses key={course._id} courses={course} />
              ))
            ) : (
              <div>Không có khoá học nào</div>
            )}
          </div>
        ) : (
          <div className="grid grid-rows-1 sm:grid-row-2 lg:grid-rows-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <ItemCourses2 key={idx} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {/* Pagination */}
        <div className="flex space-x-4 justify-center mt-4">
          <button onClick={() => onChange(currentPage - 1)} disabled={currentPage === 1}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-4">
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
          </button>
          {[...Array(meta.pages)].map((_, index) => (
            <button
              key={index}
              className={`font-bold py-3 px-5 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
              onClick={() => onChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => onChange(currentPage + 1)} disabled={currentPage === meta.pages}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-4">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
          <div>Tổng trang {meta.pages}</div>
        </div>
      </div>
    </>
  );
}
