import React from "react";
import ItemDashboard from "@/components/admin/courses/ItemDashboard";
export default async function Page() {
  return (
    <div>
      <h2 className="text-black p-6 font-semibold text-xl ">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ml-6">
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
      </div>

      <h2 className="font-semibold text-xl text-black p-6 ">
        {" "}
        In progress Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ml-8 gap-6">
        {/* <ItemCourses />
        <ItemCourses />
        <ItemCourses /> */}
      </div>
    </div>
  );
}
