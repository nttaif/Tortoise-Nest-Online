import HeaderAuth from '@/components/HeaderAuth';
import FooterAuth from "@/components/FooterAuth";
import React from 'react'
import { Button } from 'antd';

export default function page() {
  return (
    <div>
    <HeaderAuth>
    </HeaderAuth>
    <div className='w-full h-[2000px]' >
    <section id='banner' className=' w-[full] flex bg-banner-main pt-2  ' >
      <div className='w-full' >
        <div className='flex justify-around w-full text-black ' > 
          <div className='w-[30%]' >
            <h3>Không ngừng học tập và rèn luyện </h3>
            <p>Mỗi hành trình dạy và học đều là duy nhất. Theo dõi Chúng tôi sẽ giúp bạn định hướng con đường của mình.</p>
            <div>
                <Button><a href="">Bắt đầu ngay thôi</a></Button>
            </div>
          </div>
          <div>
            <img src="images\pic1-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </section>
      </div>
    <FooterAuth></FooterAuth>
    </div>
  )
}
