import HeaderAuth from '@/components/HeaderAuth';
import FooterAuth from "@/components/FooterAuth";
import React from 'react'
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/ui/carousel';
import { CarouselSpacing , CoursesCarousel  } from '@/components/Carousel';
import { Badge } from '@/components/ui/badge';
import Marquee from "react-fast-marquee";
import ItemCourses from '@/components/ItemCourses';
import Image from 'next/image'


export default function page() {

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
    <HeaderAuth>
    </HeaderAuth>
    <div className='w-full h-fit bg-white pb-14 '  >
    <section id='banner' className='w-full flex flex-col md:flex-row bg-banner-main pt-2'>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-around w-full text-black'>
          <div className='content-center w-full md:w-[50%] lg:w-[30%] text-center md:text-left px-4 md:px-0'>
            <h3 className='text-[36px] md:text-[44px] lg:text-[54px] pb-4'>
              Không ngừng <b>học tập</b> và rèn luyện
            </h3>
            <p className='font-thin text-[#7b798c]'>
              Mỗi hành trình dạy và học đều là duy nhất. Theo dõi Chúng tôi sẽ giúp bạn định hướng con đường của mình.
            </p>

            <div className='pt-10'>
              <Button className='w-[200px] md:w-[250px] h-[55px] bg-blue-700 hover:bg-yellow-600 text-white  font-bold py-2 px-4 rounded-full' variant="btn_home">
                <a href="#">Bắt đầu ngay thôi</a>
              </Button>
            </div>
          </div>
          <div className='w-full md:w-[50%] lg:w-[30%] flex justify-center md:justify-end'>
          <Image
              src='/images/pic1-removebg-preview.png'
              width={500}
              height={500}
              alt='Hello'
            />
          </div>
        </div>
      </div>
    </section>
    <section className='pb-16 pt-16' >
    <div className='w-full flex flex-col  justify-center text-center pl-60 pr-60 ' >
      <div id='content-text' className='flex flex-col text-black pb-10 ' >
        <span className='text-center flex justify-center items-center pb-10  ' >
        <Badge className='w-45 flex text-center rounded-3xl ' variant="mainbadge" >
        Danh mục thịnh hành
        </Badge>
        </span>
        <h3 className='text-[#161439] text-[54px] font-bold ' >Danh mục hàng đầu chúng tôi có</h3>
        <p>when known printer took a galley of type scrambl edmake</p>
        </div>      
    <div id='category-chosse' className='h-[300px] w-full flex flex-row justify-around items-center bg-[#f7f7f9] rounded-full ' >
        <CarouselSpacing items={itemsData} ></CarouselSpacing>
      </div>      
    </div>
    </section>
    <section className='pb-16' >
      <Marquee pauseOnHover speed={100} className='bg-[#06042e] pb-2 pt-2 '  >
        <div className='pl-16' ><img src="images\amazon-logo.png" alt="" className='w-40 ' /></div>
        <div className='pl-16' ><img src="images\star.png" alt="" className='w-10 h-10' /></div>
        <div className='pl-16' ><img src="images\huflit-logo.png" alt="" className='w-40 ' /></div>
        <div className='pl-16' ><img src="images\amazon-logo.png" alt="" className='w-40 ' /></div>
        <div className='pl-16' ><img src="images\star.png" alt="" className='w-10 h-10' /></div>
        <div className='pl-16' ><img src="images\huflit-logo.png" alt="" className='w-40 ' /></div><div className='pl-16' ><img src="images\amazon-logo.png" alt="" className='w-40 ' /></div>
        <div className='pl-16' ><img src="images\star.png" alt="" className='w-10 h-10' /></div>
        <div className='pl-16' ><img src="images\huflit-logo.png" alt="" className='w-40 ' /></div><div className='pl-16' ><img src="images\amazon-logo.png" alt="" className='w-40 ' /></div>
        <div className='pl-16' ><img src="images\star.png" alt="" className='w-10 h-10' /></div>
        <div className='pl-16' ><img src="images\huflit-logo.png" alt="" className='w-40 ' /></div>
      </Marquee>
      </section>
      <section className='pb-16' >
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-xl shadow-lg p-6 lg:p-10 mx-auto max-w-7xl">
            <div className="relative w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
              src='/images/pic1-removebg-preview.png'
              width={500}
              height={500}
              alt='Hello'
            />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white p-3 rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.48-3.754A1 1 0 007 8.25v7.5a1 1 0 001.272.962l6.48-3.754a1 1 0 000-1.73z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 flex flex-col items-start lg:pl-10">
                <h2 className="text-3xl font-bold mb-4">Hàng nghìn khóa học hàng đầu hiện có ở một nơi</h2>
                <p className="text-gray-600 mb-6">
                Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong nhóm dễ dàng sắp xếp, ưu tiên và.
                </p>
                <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                        <span className="text-yellow-500">•</span>
                        <span className="ml-2 text-black ">Những người hướng dẫn đẳng cấp thế giới nhất</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-yellow-500">•</span>
                        <span className="ml-2 text-black ">Truy cập lớp học của bạn ở mọi nơi</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-yellow-500">•</span>
                        <span className="ml-2 text-black ">Kế hoạch khóa học linh hoạt</span>
                    </li>
                </ul>
                <Button variant={'btn_home'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
                Bắt đầu dùng thử miễn phí
              </Button>
            </div>
        </div>
      </section>
      <section className='flex flex-col ' >
      <div className='w-full flex flex-col  justify-center text-center pl-60 pr-60 ' >
      <div id='content-text' className='flex flex-col text-black pb-10 ' >
        <span className='text-center flex justify-center items-center pb-10  ' >
        <Badge className='w-45 flex text-center rounded-3xl ' variant="mainbadge" >
        Các khóa học hàng đầu
        </Badge>
        </span>
        <h3 className='text-[#161439] text-[54px] font-bold ' >Khám phá các khóa học tốt nhất thế giới của chúng tôi</h3>
        <p>Khi máy in được biết đến sử dụng một bản in kiểu scrambl edmake</p>
         </div>  
        </div>  
        <div id='category-chosse' className=' w-full flex flex-row justify-around items-center  ' >
       <CoursesCarousel></CoursesCarousel>
       </div>
      </section>
      </div>
    <FooterAuth></FooterAuth>
    </div>
  )
}
