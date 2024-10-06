'use client'
import { useState } from 'react';

const categories = [
  { title: 'Development', count: 29, icon: '💻' },
  { title: 'Marketing', count: 31, icon: '📊' },
  { title: 'Life Style', count: 23, icon: '👜' },
  { title: 'Management', count: 19, icon: '📈' },
  { title: 'App Design', count: 18, icon: '📱' },
  { title: 'Graphic Design', count: 22, icon: '🎨' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center h-72 bg-[#f7f7f9] rounded-full  ">
      <button
        onClick={prevSlide}
        className="p-3 rounded-full bg-yellow-400 text-black focus:outline-none"
      >
        ⬅
      </button>
      <div className="flex space-x-6 overflow-hidden w-full mx-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-32 h-32 p-4 bg-gray-100 rounded-full shadow-md transition-transform duration-300 ease-in-out transform ${
              index === currentIndex ? 'scale-110' : 'scale-90'
            }`}
          >
            <span className="text-4xl">{category.icon}</span>
            <h3 className="mt-2 text-lg font-bold text-gray-700">{category.title}</h3>
            <p className="text-sm text-gray-500">({category.count})</p>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="p-3 rounded-full bg-yellow-400 text-black focus:outline-none"
      >
        ➡
      </button>
    </div>
  );
};

export default Carousel;
