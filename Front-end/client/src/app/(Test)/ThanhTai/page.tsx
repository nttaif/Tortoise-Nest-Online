import React from "react";
import HeaderAdmin from "./component/HeaderAdmin";
import ItemDashboard from "@/components/admin/courses/ItemDashboard";
export default function Page() {
  return (
    <div className="body bg-white dark:bg-[#0F172A]">
      <HeaderAdmin/>
      <h2 className="text-black p-6 font-semibold text-xl ">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ml-6">
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
        <ItemDashboard></ItemDashboard>
      </div>
    </div>
  );
}
