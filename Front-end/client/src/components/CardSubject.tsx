import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function InstructorCard({
  title = "Text",
  description = "Để lấy một ví dụ tầm thường, ai trong chúng ta thực hiện bài tập thể chất, vâng, điều này xảy ra ở đây.",
  imageSrc = "/images/become-a-student.png",
  imageClass = "" // Add this default prop for imageClass
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border-[1px] border-gray-300 p-2 ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="">
            <Image
              className={`w-full h-full object-cover ${imageClass}`} // Apply imageClass here
              src={imageSrc}
              alt="Instructor"
              objectFit="cover"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-bold hover:text-[#f8bc24] duration-300">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            <Button
              variant={'btn_home'}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-10 w-36 rounded-full"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
