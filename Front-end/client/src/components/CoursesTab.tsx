'use client'
import React from "react";
import ItemCourses from "./popular/ItemCourses";
import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Định nghĩa kiểu dữ liệu cho từng khóa học
interface IProp {
  listCourses: any;
  meta?: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
}

export default function CoursesTab(props: IProp) {
  const { listCourses, meta } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const onChange = (page: number, pageSize?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("current", page.toString());
    if (pageSize) params.set("pageSize", pageSize.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      {/* Tab Header
        <div className="flex justify-start border-b-2 gap-8">
          {listCourses.map((courses) => (
            <button
              key={courses._id}
              className={`py-2 px-4 text-lg font-semibold ${
                activeTab === tab ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab as keyof CoursesData)}
            >
              {tab}
            </button>
          ))}
        </div> */}

      {/* Tab Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listCourses?.result?.map((course) => (
          <ItemCourses key={course._id} courses={course} />
        ))}
      </div>
      <div className="flex justify-end w-full mt-4">
        <Pagination
          total={meta?.total}
          showTotal={(total) => `Tổng ${total} mục`}
          defaultPageSize={meta?.pageSize}
          defaultCurrent={meta?.current}
          className="pagination"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
