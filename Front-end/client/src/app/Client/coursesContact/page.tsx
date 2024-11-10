import React from 'react';
import {FaArrowRight, } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-10 bg-purple-50">
      <div className="flex justify-center">
        {/* Contact Details and Send Us Message Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
          {/* Left Section - Contact Details */}
          <div className="space-y-8 w-full md:w-3/4">
            {/* Address Box */}
            <div className="p-5 bg-white rounded-lg shadow-md border border-purple-300 flex items-center space-x-4">
              <div className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Địa chỉ</h4>
                <p className="text-sm">828 Đ. Sư Vạn Hạnh, Phường 12, Quận 10<br />Hồ Chí Minh</p>
              </div>
            </div>

            {/* Phone Box */}
            <div className="p-5 bg-white rounded-lg shadow-md border border-purple-300 flex items-center space-x-4">
              <div className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2a2 2 0 012 2v2a2 2 0 01-2 2H3v5a2 2 0 002 2h5a2 2 0 002-2v-1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10h1v1H7zm5-7h2a2 2 0 012 2v4a2 2 0 01-2 2h-2V7a2 2 0 00-2-2H9" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Điện thoại</h4>
                <p className="text-sm">(028) 3863 2052 <br />(028) 3862 9232</p>
              </div>
            </div>

            {/* Email Box */}
            <div className="p-5 bg-white rounded-lg shadow-md border border-purple-300 flex items-center space-x-4">
              <div className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9 6 9-6" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Địa chỉ E-mail</h4>
                <p className="text-sm">contact@huflit.edu.vn<br />info@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Section - Send Us Message */}
          <div className="p-6 bg-white rounded-lg shadow-md border border-purple-300 w-full md:w-11/12">
            <h3 className="text-xl font-semibold mb-4">Gửi tin nhắn cho chúng tôi</h3>
            <p className="text-gray-600 mb-6 text-sm">Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu * </p>
            <form>
              {/* Comment Textarea */}
              <div className="mb-4">
                <textarea
                  className="w-full border border-purple-300 rounded p-2 text-sm h-24"
                  placeholder="Comment"
                ></textarea>
              </div>
              {/* Input Fields Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input type="text" className="border border-purple-300 rounded p-2 text-sm" placeholder="Tên *" />
                <input type="email" className="border border-purple-300 rounded p-2 text-sm" placeholder="E-mail *" />
                <input type="text" className="border border-purple-300 rounded p-2 text-sm" placeholder="Website *" />
              </div>
              {/* Submit Button */}
              <Button
                variant={"btn_home"}
                className="mx-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full w-2/3 flex items-center justify-center"
                onClick={() => {
                  router.push("/Client/coursesLesson");
                }}
              >
                <span>Tham gia</span>
                <FaArrowRight className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-80 mt-10">
        <iframe
          title="HUFLIT Location"
          className="w-full h-full rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6271495860874!2d106.6651762153348!3d10.776014692324112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edb765b5c25%3A0x9a3519bdad5a85a3!2sTr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Ngo%E1%BA%A1i%20ng%E1%BB%AF%20-%20Tin%20h%E1%BB%8Dc%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%20(HUFLIT)!5e0!3m2!1sen!2s!4v1698968719741!5m2!1sen!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
