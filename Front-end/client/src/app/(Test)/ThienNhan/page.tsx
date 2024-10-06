import HeaderAuth from '@/components/HeaderAuth';
import FooterAuth from "@/components/FooterAuth";
import React from 'react'
import Carousel from '@/components/Carousel';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <div>
    <HeaderAuth>
    </HeaderAuth>
    <div className='w-full h-[2000px] bg-white '  >
    <section id='banner' className=' w-[full] flex bg-banner-main pt-2  ' >
      <div className='w-full' >
        <div className='flex justify-around w-full text-black ' > 
          <div className='w-[30%] content-center ' >
            <h3 className='text-[54px] pb-4' >
              Không ngừng <b>học tập</b> và rèn luyện 
              
              </h3>
            <p className='font-thin text-[#7b798c]' >Mỗi hành trình dạy và học đều là duy nhất. Theo dõi Chúng tôi sẽ giúp bạn định hướng con đường của mình.</p>

            <div className='pt-10' >
                <Button  className='w-[250px]' variant="btn_home"   >
                  <a href="">Bắt đầu ngay thôi</a>
                  </Button>
            </div>
          </div>
          <div>
            <img src="images\pic1-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className='flex pt-[120px] ' >
    <div className='w-full flex flex-col  justify-center text-center pl-80 pr-80 ' >
      <div id='content-text' className='flex flex-col text-black ' >
        <span>Trending Categories</span>
        <h3>Top Category We Have</h3>
        <p>when known printer took a galley of type scrambl edmake</p>
        </div>      
    <div id='category-chosse' className='' >
      <Carousel></Carousel>
      </div>      
    </div>
    </section>
      </div>
    <FooterAuth></FooterAuth>
    </div>
  )
}
