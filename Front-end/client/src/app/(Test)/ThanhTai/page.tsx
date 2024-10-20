import React from 'react'
import handlerUrlUploadImage from '@/utils/actions'
import ImageUpload from '@/components/popular/ImageUpload';
import { Input } from '@/components/ui/input';
export  default async function page() {
  
  const res =await handlerUrlUploadImage();
  return (
    <div>
      <ImageUpload uploadUrlData={res?.data} />
    </div>
  )
}
