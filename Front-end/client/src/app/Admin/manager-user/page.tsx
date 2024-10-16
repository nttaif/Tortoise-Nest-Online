import { sendRequest } from '@/utils/api';
import React from 'react';
import { auth } from '@/auth';
import UserTable from '../../Admin/component/user.table';

interface IProps {
  params:{id:string}
  searchParams:{[key:string]:string | string[] | undefined}
}
export default async function Page (props:IProps) {
  const session = await auth();
  const current= props?.searchParams?.current??1;
  const pageSize= props?.searchParams?.pageSize??10;
// Chuyển đổi để chỉ lấy giá trị string hoặc number
  const queryParams = {
    current: typeof current === 'string' ? current : current.toString(),
    pageSize: typeof pageSize === 'string' ? pageSize : pageSize.toString(),
  };
  const res = await sendRequest<IBackendRes<any>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`,
    queryParams,
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
    nextOption:{
      next:{tag:['list-users']} //call revalidate Tag
    }
  });
  return (
    <div>
      <UserTable users={res?.data?.results??[]} meta={res?.data?.meta}></UserTable>
    </div>
  );
}
