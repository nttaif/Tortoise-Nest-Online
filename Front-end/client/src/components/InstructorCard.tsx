import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const instructors = [
  {
    name: 'Ngo Thanh Tai',
    title: 'Digital Marketing',
    rating: 1.0,
    image: '/images/GV1.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Nguyen Le Hoang Vi',
    title: 'Web Development',
    rating: 4.8,
    image: '/images/GV2.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Nguyen Thai Long',
    title: 'Web Development',
    rating: 4.8,
    image: '/images/hinh1.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Pham Thi Minh Anh',
    title: 'UX Design Lead',
    rating: 4.8,
    image: '/images/GV3.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Ngo Thi Dang Quynh',
    title: 'Digital Marketing',
    rating: 4.8,
    image: '/images/GV4.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Phan Thien Nhan',
    title: 'Web Design',
    rating: 4.8,
    image: '/images/GV5.jpeg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Truong Thi Hong Nhung',
    title: 'Web Design',
    rating: 4.8,
    image: '/images/GV6.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Hoang Ngoc Mai',
    title: 'UX Design Lead',
    rating: 4.8,
    image: '/images/GV7.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Huynh Thi Ngoc Vy',
    title: 'Web Development',
    rating: 4.8,
    image: '/images/GV8.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const InstructorList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">All Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="flex items-center">
              {/* Hình giảng viên */}
              <div className="relative w-28 h-28 mr-6">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={112}
                  height={112}
                  className="rounded-full object-cover instructor-image"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              {/* Thông tin giảng viên */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-gray-500 mb-1">{instructor.title}</p>
                <p className="text-yellow-500 mb-4">★ {instructor.rating} Ratings</p>
                <div className="flex space-x-4 text-gray-500">
                  <a href={instructor.socials.facebook} className="hover:text-blue-600">
                    <FaFacebook size={20} />
                  </a>
                  <a href={instructor.socials.twitter} className="hover:text-blue-400">
                    <FaTwitter size={20} />
                  </a>
                  <a href={instructor.socials.instagram} className="hover:text-pink-500">
                    <FaInstagram size={20} />
                  </a>
                  <a href={instructor.socials.linkedin} className="hover:text-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorList;