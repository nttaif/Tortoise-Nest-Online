import { auth } from "@/auth";
import { sendRequest } from "@/utils/api";
import { handlerUrlUploadImage } from "@/utils/actions";
import BannerAdmin from "@/components/admin/BannerAdmin";
import MenuAdmin from "@/components/admin/layout/MenuAdmin";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const listLecturer = await sendRequest<IBackendRes<any>>({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/lecturer`,
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
  });
  const resUploadImage = await handlerUrlUploadImage();
  return (
    <div>
      <div className="bg-white py-8 px-4 flex justify-center">
        <div className="container px-auto">
          {/* banner about us */}
          <div className="w-full flex">
            <BannerAdmin
              resUploadImage={resUploadImage?.data}
              listLecturer={listLecturer?.data}
            ></BannerAdmin>
          </div>

          <div className="bg-gray-100 rounded-xl container mx-auto border-2 border-gray-300 mt-12">
            <div className=" min-h-[80] flex flex-col lg:flex-row gap-6">
              {/* Sidebar */}
              <MenuAdmin></MenuAdmin>
              {/* Course Grid */}
              <div className="w-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
