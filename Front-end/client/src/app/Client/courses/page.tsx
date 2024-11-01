import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
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
        <SectionContentCourse
          courses={res?.data?.result ?? []}
          meta={res?.data?.meta}
        />
      </div>
    </div>
  );
}
