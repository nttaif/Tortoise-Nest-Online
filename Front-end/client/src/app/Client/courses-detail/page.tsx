import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';

export default function CoursePage() {
  const courseInfo = [
    { label: 'Mức độ:', value: 'Chuyên gia' },
    { label: 'Khoảng thời gian:', value: '11h 20m' },
    { label: 'Bài học:', value: '12' },
    { label: 'Câu đố:', value: '145' },
    { label: 'Chứng chỉ:', value: 'Đúng' },
    { label: 'Tốt nghiệp:', value: '25K' },
  ];

  const navItems = ['Overview', 'Curriculum', 'Instructors', 'Reviews'];

  return (
    <div className="container mx-auto p-4 md:p-6 min-h-screen flex flex-col">
      {/* Header khóa học */}
      <header className="bg-white rounded-lg shadow-lg mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột trái - Hình ảnh và nội dung */}
          <div className="relative lg:col-span-2">
            {/* Hình ảnh khóa học */}
            <Image
              src="/images/laravel8.0.png"
              alt="Course Banner"
              layout="responsive"
              width={1000}
              height={500}
              className="rounded-t-lg object-cover"
            />
            
            {/* Nội dung dưới hình ảnh */}
            <div className="p-6 bg-white rounded-b-lg">
              {/* Nút phát triển và đánh giá */}
              <div className="flex items-center space-x-2 mb-4">
                <button className="bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-600 font-bold py-2 px-4 rounded-full">
                  Phát triển
                </button>
                <span className="text-yellow-500">★ 4.5 Đánh giá</span>
              </div>

              {/* Thông tin khóa học */}
              <h1 className="text-2xl font-bold mb-4">Giải quyết xung đột giữa nhà thiết kế và kỹ sư</h1>
              
              {/* Thông tin người hướng dẫn */}
              <div className="flex items-center mb-6">
                <Image
                  src="/images/hinh1.jpg"
                  alt="Instructor"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-gray-600 ml-2">By ThaiLong • 24/07/2024 • 2,250 Học viên</p>
              </div>

              {/* Tabs điều hướng thông tin khóa học */}
              <nav className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-x-4 sm:space-y-0">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${
                        index === 0 ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Cột phải - Thông tin khóa học */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-400 flex flex-col">
            {/* Nhúng video */}
            <h2 className="text-xl font-bold mb-2">Xem trước khóa học</h2>
            <div className="relative pb-[56.25%] h-0 mb-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Ml4XCF-JS0k"
                title="Course Preview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Phần giá */}
            <div className="bg-purple-600 text-white text-center rounded-lg py-4 mb-4">
              <p className="text-xl font-bold">Học phí khóa học này:</p>
              <p className="text-3xl font-bold">$18.00</p>
              <p className="line-through text-gray-300">$32.00</p>
            </div>

            {/* Thông tin chi tiết khóa học */}
            <div className="text-gray-600 space-y-3 mb-4">
              {courseInfo.map((item) => (
                <div key={item.label} className="flex justify-between border-b border-gray-300 py-1">
                  <span className="font-semibold">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Hình thức thanh toán */}
            <div className="text-center mb-4">
              <p className="font-bold text-gray-700 mb-2">Thanh toán an toàn:</p>
              <div className="flex justify-center space-x-2">
                <Image
                  src="/images/payment.webp"
                  alt="Payment Logos"
                  width={180}
                  height={20}
                />
              </div>
            </div>

            {/* Chia sẻ khóa học */}
            <div className="text-center mb-4">
              <p className="font-bold text-gray-700 mb-2">Chia sẻ khóa học này:</p>
              <div className="flex justify-center space-x-3 text-gray-600">
                <FaFacebook className="hover:text-blue-600 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <FaTwitter className="hover:text-blue-400 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <FaWhatsapp className="hover:text-green-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <FaYoutube className="hover:text-red-500 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Nút bấm */}
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full w-full flex items-center justify-center">
              <span>Xem tất cả người hướng dẫn</span>
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Mô tả khóa học */}
      <section className="mt-6 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Mô tả khóa học</h2>
        <p className="text-gray-600">
          Bản thân nỗi đau là rất quan trọng, quá trình huấn luyện sẽ được tuân theo, nhưng nó xảy ra vào thời điểm mà với rất nhiều nỗ lực và đau đớn, một người nào đó đã đình chỉ thai kỳ chơi bóng rổ. Tiếng cười là một cách tốt để vẽ một lớp nước dày hoặc tạo điều kiện. Nỗi đau là quan trọng, đó là hệ quả của nền giáo dục ưu tú.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-4">Bạn sẽ học được gì trong khóa học này</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Làm việc với màu sắc, độ dốc và lưới</li>
          <li>Tất cả các phím tắt hữu ích</li>
          <li>Có khả năng tạo tờ rơi, áp phích, v.v.</li>
          <li>Giao diện người dùng tuyệt vời cho ứng dụng của bạn</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white rounded-lg shadow-lg p-6">
        <p className="text-center text-gray-600">© 2024 Khóa học của bạn</p>
      </footer>
    </div>
  );
}
