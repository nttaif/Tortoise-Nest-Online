import React from "react";
import CoursesTab from "@/components/CoursesTab";
export default function HomePage() {
  return (
    <div className="p-3 mb-6 h-full">
      <div className="bg-white rounded-xl h-full">
        <div className="px-12 py-12 ">
          <h2 className="font-semibold text-xl text-black pb-12">
            Enrolled Courses
          </h2>
          <CoursesTab />
        </div>
      </div>
    </div>
  );
}
