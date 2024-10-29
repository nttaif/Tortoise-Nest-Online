import React from 'react'
import ImageUpload from '@/components/popular/ImageUpload';
import { Input } from '@/components/ui/input';
import AddCoursesTable from './component/add.courses.table';
import { sendRequest } from '@/utils/api';
import { auth } from '@/auth';
import { handlerUrlUploadImage } from '@/utils/actions';
export  default async function page() {
  const session = await auth();
  const listLecturer = await sendRequest<IBackendRes<any>>({
    method:'GET',
    url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/lecturer`,
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
  })
  const resUploadImage = await handlerUrlUploadImage()
  return (
    <div className='container mx-auto'>
      <AddCoursesTable resUploadImage={resUploadImage?.data} listLecturer={listLecturer.data}></AddCoursesTable>
    </div>
  )
}
