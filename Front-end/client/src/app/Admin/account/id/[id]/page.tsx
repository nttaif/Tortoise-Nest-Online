import React from "react";
import Profile from "@/components/admin/Profile";
import { User } from "@/types/next-auth";
import { sendRequest } from "@/utils/api";
import { auth } from "@/auth";

interface IProp{
  params: { id: string }; // Expecting an id parameter in the URL
  _id?:string;
}

export default async function page(props: IProp) {
  const session =await auth();
  const {params} = props;
  const res = await sendRequest<IBackendRes<User>>({
    method: 'GET',
    headers:  {Authorization: `Bearer ${session?.user?.access_token}`},
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/id/${params.id}` // Use params.id for the request
  });
  return (
    <div className="p-3 mb-6 h-full rounded-xl w-full">
      <Profile user={res?.data}></Profile>
    </div>
  );
}
