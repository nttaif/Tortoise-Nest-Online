import { auth } from "@/auth";
import CoursesTab from "@/components/CoursesTab";
import { sendRequest } from "@/utils/api";
import React from "react";
interface IProps {
  params:{id:string}
  searchParams:{[key:string]:string | string[] | undefined}
}
export default async function Page(props:IProps) {
    const session = await auth();
    const current= props?.searchParams?.current??1;
    const pageSize= props?.searchParams?.pageSize??9;
    const _idLecture= session?.user._id;
// Chuyển đổi để chỉ lấy giá trị string hoặc number
  const queryParams = {
    current: typeof current === 'string' ? current : current.toString(),
    pageSize: typeof pageSize === 'string' ? pageSize : pageSize.toString(),
    _idLecture: typeof _idLecture === 'string' ? _idLecture : _idLecture ??'',
  };
    const listMyCourses = await sendRequest<IBackendRes<any>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/courses`,
        queryParams,
        headers: {
          Authorization: `Bearer ${session?.user?.access_token}`,
        },
        nextOption:{
          next:{tag:['list-my-courses']} //call revalidate Tag
        }
      });
      console.log('>>>>>>>>>Check data: ',queryParams)
  return (
    <div className="p-3 mb-6 h-full">
      <div className="bg-white rounded-xl h-full">
        <div className="px-12 py-12 ">
          <h2 className="font-semibold text-xl text-black pb-12">
            Khoá học của tôi:
          </h2>
          <CoursesTab meta={listMyCourses?.data?.meta} listCourses={listMyCourses.data ?? []}/>
        </div>
      </div>
    </div>
  );
}
