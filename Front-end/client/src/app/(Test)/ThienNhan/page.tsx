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
import CardSubject from '@/components//CardSubject';
import Instructors from '@/components/InstructorCard';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BlogsItems from '@/components/BlogItems';


export default function page() {

  const features = [
    {
      id: 1,
      title: 'Learn with Experts',
      description: 'Curate and share area with Pluralsight content to reach your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 15l-5-4h10l-5 4z" />
          <path d="M5 10h10V5H5v5zm5-9C4.48 1 0 5.48 0 11s4.48 10 10 10 10-4.48 10-10S15.52 1 10 1z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Learn Anything',
      description: 'Curate and share area with Pluralsight content to reach your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 7V4H7v3H4v6h3v3h6v-3h3V7h-3zm-1 5h-4V9h4v3z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Get Online Certificate',
      description: 'Curate and share area with Pluralsight content to reach your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3h12v2H4V3zm2 4h8v1H6V7zm0 3h8v1H6v-1zM4 14v-1h12v1H4z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Email Marketing',
      description: 'Curate and share area with Pluralsight content to reach your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3h12v2H4V3zm2 4h8v1H6V7zm0 3h8v1H6v-1zM4 14v-1h12v1H4z" />
        </svg>
      ),
    },
  ];
  

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
    <div >
    <HeaderAuth/>
    <div className='w-full h-full bg-white pb-14 '  >
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
<section className='pb-16'>
  <div className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-xl shadow-lg p-6 lg:p-10 mx-auto max-w-7xl">
    <div className="relative w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
        <Image
          src='/images/pic1-removebg-preview.png'
          width={500}
          height={500}
          alt='Hello'
          className="object-cover rounded-lg"  // Giúp hình ảnh không bị biến dạng
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
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">Hàng nghìn khóa học hàng đầu hiện có ở một nơi</h2>
      <p className="text-gray-600 mb-6">
        Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong nhóm dễ dàng sắp xếp, ưu tiên và.
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-center">
          <span className="text-yellow-500">•</span>
          <span className="ml-2 text-black">Những người hướng dẫn đẳng cấp thế giới nhất</span>
        </li>
        <li className="flex items-center">
          <span className="text-yellow-500">•</span>
          <span className="ml-2 text-black">Truy cập lớp học của bạn ở mọi nơi</span>
        </li>
        <li className="flex items-center">
          <span className="text-yellow-500">•</span>
          <span className="ml-2 text-black">Kế hoạch khóa học linh hoạt</span>
        </li>
      </ul>
      <Button variant={'btn_home'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
        Bắt đầu dùng thử miễn phí
      </Button>
    </div>
  </div>
</section>

<section className='flex flex-col pb-16'>
  <div className='w-full flex flex-col justify-center text-center px-4 lg:px-60'>
    <div id='content-text' className='flex flex-col text-black pb-10'>
      <span className='text-center flex justify-center items-center pb-10'>
        <Badge className='w-45 flex text-center rounded-3xl' variant="mainbadge">
          Các khóa học hàng đầu
        </Badge>
      </span>
      <h3 className='text-[#161439] text-3xl lg:text-[50px] font-bold'>Khám phá các khóa học tốt nhất thế giới của chúng tôi</h3>
      <p className="text-lg lg:text-base mt-4  ">Khi máy in được biết đến sử dụng một bản in kiểu scrambled make</p>
    </div>
  </div>
  <div id='category-chosse' className='w-full flex flex-row justify-around items-center'>
    <CoursesCarousel />
  </div>
</section>


      <section className="flex items-center justify-center bg-[#5751e1] p-8 rounded-lg relative overflow-hidden pb-16">
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
    <div className="w-1/2 h-full bg-[#5771e1] rounded-full transform scale-[2] opacity-30"></div>
    <div className="w-1/2 h-full bg-[#5751e1] rounded-full transform scale-[2] opacity-10"></div>
  </div>
  <div className="relative z-10 flex items-center w-full max-w-5xl flex-col md:flex-row">
    <div className="flex-1 flex justify-center mb-4 md:mb-0">
      <img
        src="\images\student-demo.png"
        alt="Student"
        className="w-full h-auto max-w-[250px] md:max-w-[300px] hidden md:block" 
      />
    </div>
    <div className="flex-1 text-center md:text-left ml-4">
      <h2 className="text-white text-2xl md:text-4xl font-semibold mb-2">
        Bạn muốn được <span className="text-yellow-400">thông tin</span> các khóa học và nghiên cứu mới?
      </h2>
      <div className="flex flex-col md:flex-row mt-4">
        <input
          type="email"
          placeholder="Type Your E-Mail"
          className="flex-1 p-4 rounded-full outline-none mr-0 md:mr-5 ring-2 ring-[#433ec2] bg-[#4a44d1] mb-4 md:mb-0"
        />
        <Button variant={'btn_home'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-10 w-full md:w-36 rounded-full">
          Subscribe Now
        </Button>
      </div>
    </div>
  </div>
</section>

    <section className="container mx-auto flex flex-col md:flex-row items-start justify-between p-8 bg-white pb-16 ">
      <div className="flex-1 mb-8 md:mb-0 pt-20 ">
        <span className='text-center flex  items-center'>
        <Badge className='w-45 flex text-center rounded-3xl ' variant="mainbadge" >
        Skilled Introduce
        </Badge>
        </span>
        <h2 className="text-5xl font-extrabold mt-4 mb-4 text-gray-900">
          Our Top Class & Expert Instructors In One Place
        </h2>
        <p className="text-gray-600 mb-8 font-light ">
          when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries
        </p>
        <Button variant={'btn_home'} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-10 w-36 rounded-full">
            Subscribe Now
              </Button>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <Instructors/>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <Instructors/>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <Instructors/>
        </div><div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <Instructors/>
        </div>
        {/* Add more instructor cards similarly */}
      </div>
    </section>
    <section className="flex justify-center py-16 bg-gray-100 pb-16">
  <div className="container mx-auto">
    <div className="bg-[#282568] shadow-lg shadow-indigo-500/100 rounded-[70px] p-8 text-white text-center flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 h-auto md:h-72">
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>45K+</h3>
        <p className="text-sm mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Active Students</p>
      </div>
      <div className="w-px bg-white opacity-50 mx-4 hidden md:block"></div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>89+</h3>
        <p className="text-sm mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Faculty Courses</p>
      </div>
      <div className="w-px bg-white opacity-50 mx-4 hidden md:block"></div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>156K</h3>
        <p className="text-sm mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Best Professors</p>
      </div>
      <div className="w-px bg-white opacity-50 mx-4 hidden md:block"></div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>42K</h3>
        <p className="text-sm mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Award Achieved</p>
      </div>
    </div>
  </div>
</section>

<section className="w-full h-full pb-16">
  <div className="flex flex-col lg:flex-row h-auto items-center justify-center bg-[#f7f7f9] p-10 rounded-lg space-y-10 lg:space-y-0 lg:space-x-10  ">
    <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
      <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
        <Image
          src="/images/introduce-student.png"
          alt="student"
          className="absolute inset-0 object-cover"
          width={300}
          height={300}
        />
      </div>
    </div>
    <div className="flex flex-col lg:w-1/2 h-auto items-center lg:items-start text-center lg:text-left space-y-6">
      <div className="flex justify-center lg:justify-start pb-4">
        <Badge className="w-45 h-auto text-xl text-center rounded-3xl" variant="mainbadge">
          Danh mục thịnh hành
        </Badge>
      </div>
      <div className="w-full lg:w-[75%] space-y-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
        Bắt đầu học từ các giảng viên chuyên nghiệp thế giới
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize, and collaborate.
        </p>
      </div>
      <div className="w-full min-h-[40vh] lg:w-[90%] text-black">
        <Accordion type="single" collapsible className="w-1/2 absolute">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
            Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong Hộp thư đến chia 
            Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong Hộp thư đến chia 
            Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong Hộp thư đến chia 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
            Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong nhóm dễ dàng sắp xếp mức độ ưu tiên và. Trong tập này. Đã tồn tại không chỉ năm thế kỷ. Edhen, một nhà in không xác định đã lấy một bản in và xáo trộn
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
            Hộp thư đến chia sẻ trực quan của Groove giúp các thành viên trong nhóm dễ dàng sắp xếp mức độ ưu tiên và. Trong tập này. Đã tồn tại không chỉ năm thế kỷ. Edhen, một nhà in không xác định đã lấy một bản in và xáo trộn
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</section>
<section className="w-full h-fit bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-52">
  <div className="container mx-auto flex flex-col items-center text-center space-y-16 md:space-y-20 px-4 md:px-0">
    
    <div className="space-y-6 md:space-y-12">
      <Badge className="h-auto w- md:w-50 rounded-full text-base md:text-lg" variant="mainbadge">Hành Trình Của Chúng Ta</Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Hãy bắt đầu hành trình học tập của bạn ngay hôm nay!
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-thin  max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-[#acaacc]">
        Groove’s intuitive shared inbox makes team members organize, prioritize, and collaborate effectively.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full">
       {features.map((feature) => (
      <div key={feature.id} className="flex flex-col items-center space-y-4">
      <div className="bg-white text-purple-900 p-4 rounded-full hover:translate-y-2 duration-500">
        {feature.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
      <p className="text-center text-sm md:text-base text-[#acaacc]">
        {feature.description}
      </p>
    </div>
  ))}
</div>
  </div>
</section>
<section className="relative py-16 bg-white">
  <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-purple-900 to-indigo-900"></div>
  <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 px-4">
    <CardSubject
      title="Trở thành giảng viên"
      description="Trở thành giáo viên toàn quốc hỗ trợ các học viên trên đất nước"
      imageSrc="/images/become-a-student.png"
      imageClass="hidden md:block" 
    />
    <CardSubject
      title="Trở thành học viên"
      description="Tham gia thành học viên toàn quốc ngay bây giờ"
      imageSrc="/images/become-a-student.png"
      imageClass="hidden md:block" 
    />
  </div>
</section>

<section>
  <div className="container mx-auto flex flex-col items-center text-center space-y-16 md:space-y-20 px-4 md:px-0">
    <div className="space-y-6 md:space-y-12">
      <Badge className="h-auto w-auto md:w-50 rounded-full text-base md:text-lg" variant="mainbadge">
        Tin tức & Blogs
      </Badge>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
        Cập nhật tin tức mới nhất của chúng tôi
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-thin max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-[#acaacc]">
        Groove’s intuitive shared inbox makes team members organize, prioritize, and collaborate effectively.
      </p>
    </div>
  </div>
  
  <div className='flex flex-wrap justify-between pt-8'>
    <div className='w-full sm:w-1/2 md:w-1/4 p-2'> {/* Đặt width để đảm bảo responsive */}
      <BlogsItems />
    </div>
    <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
      <BlogsItems />
    </div>
    <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
      <BlogsItems />
    </div>
    <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
      <BlogsItems />
    </div>
  </div>
</section>

      </div>
    <FooterAuth></FooterAuth>
    </div>
  )
}
