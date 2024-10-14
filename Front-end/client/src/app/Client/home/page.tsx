import { auth } from '@/auth'
import React from 'react'
import HeaderAuth from '@/components/HeaderAuth';
import FooterAuth from "@/components/FooterAuth";
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/ui/carousel';
import { CarouselSpacing } from '@/components/Carousel';

export default async function page() {

  const session = await auth();
  console.log(">>Check session 000: ",session); 
  const itemsData = [
    { icon: '🔥', text: 'Hot', number: 1 },
    { icon: '🌟', text: 'Star', number: 2 },
    { icon: '🚀', text: 'Rocket', number: 3 },
    { icon: '💎', text: 'Diamond', number: 4 },
    { icon: '🍀', text: 'Lucky', number: 5 },
    { icon: '🍀', text: 'Lucky', number: 6 },
    { icon: '🍀', text: 'Lucky', number: 7 },
    { icon: '🍀', text: 'Lucky', number: 8 },
    { icon: '🍀', text: 'Lucky', number: 9 },
  ];

  return (
    <div>
    <HeaderAuth></HeaderAuth>
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
    <div className='w-full flex flex-col  justify-center text-center pl-60 pr-60 ' >
      <div id='content-text' className='flex flex-col text-black ' >
        <span>Trending Categories</span>
        <h3>Top Category We Have</h3>
        <p>when known printer took a galley of type scrambl edmake</p>
        </div>      
    <div id='category-chosse' className='h-[300px] w-full flex flex-row justify-around items-center bg-[#f7f7f9] rounded-full ' >
        <CarouselSpacing items={itemsData} ></CarouselSpacing>
      </div>      
    </div>
    </section>
      </div>
    <FooterAuth></FooterAuth>
    </div>
  )

}
