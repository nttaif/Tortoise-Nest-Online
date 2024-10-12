import Image from 'next/image';
import { FC, ReactElement } from "react";

const LOGOS: ReactElement[] = [
  <Image
    src='/images/pic1-removebg-preview.png'
    width={250}
    height={250}
    alt='Hello'
    key="logo1"
  />,
  <Image
    src='/images/pic1-removebg-preview.png'
    width={250}
    height={250}
    alt='Hello'
    key="logo2"
  />,
  <Image
    src='/images/pic1-removebg-preview.png'
    width={250}
    height={250}
    alt='Hello'
    key="logo3"
  />,
  <Image
    src='/images/pic1-removebg-preview.png'
    width={250}
    height={250}
    alt='Hello'
    key="logo4"
  />,
  <Image
    src='/images/pic1-removebg-preview.png'
    width={250}
    height={250}
    alt='Hello'
    key="logo5"
  />,
  <Image
    src='/images/pic1-removebg-preview.png'
    width={250}
    height={250}
    alt='Hello'
    key="logo6"
  />,
];

const InfiniteSlider: FC = () => {
  return (
    <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-full m-3 items-center justify-center"
            key={`logo-${index}`}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-full m-3 items-center justify-center"
            key={`logo-repeated-${index}`}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
