import { Courses } from "@/types/next-auth";
import React from "react";

interface IProp {
  courses?: Courses;
}
export default function SectionOverview(props: IProp) {
  const { courses } = props;
  return (
    <div className="flex flex-col mx-auto rounded-xl overflow-hidden p-6  border shadow-md duration-300 hover:shadow-lg transition-all">
      <h2 className="text-2xl font-semibold mb-2 ">
        {courses?.name}
      </h2>
      <p className="text-gray-700 mb-4 text-2sm mt-3">{courses?.description}</p>
      <h3 className="text-2xl font-semibold mb-2 mt-3">
        Tại sao nên học ở đây?
      </h3>
      <p className="text-gray-700 text-2sm mb-4 mt-3">
        Là một thư viện hàng đầu của JavaScript, React sở hữu rất nhiều chức
        năng khuyến khích hoạt động lập trình của người dùng. Vậy ưu điểm của
        nhôn ngữ React là gì? Cùng TNO khám phá 5 ưu điểm nổi bật ngay dưới đây
        nhé!
      </p>
      <ul className="pl-5 space-y-2 text-2sm mt-3">
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-8 mr-2 text-yellow-500"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          Dễ nhớ, dễ sử dụng
        </li>
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-8 mr-2 text-yellow-500"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          Hỗ trợ Reusable Component trong Java
        </li>
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-8 mr-2 text-yellow-500"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          Hỗ trợ viết component dễ dàng
        </li>
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-8 mr-2 text-yellow-500"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          Hiệu suất tốt hơn khi kết hợp với Virtual DOM
        </li>
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-8 mr-2 text-yellow-500"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          Thân thiện với SEO
        </li>
      </ul>
      <p className="text-gray-700 mb-4 text-2sm mt-3">
        Trên đây là toàn bộ kiến thức React, gồm ReactJS là gì và cách thức học
        React từ mức dễ đến khó. Để sớm thành thạo React hãy bắt đầu học ngay từ
        bây giờ. Nếu muốn tìm hiểu nhiều hơn về lập trình, mọi người có thể truy
        cập website của TNO để tìm hiểu các bào viết liên quan. Chúc mọi người
        thành công với ReactJS nhé!
      </p>
    </div>
  );
}
