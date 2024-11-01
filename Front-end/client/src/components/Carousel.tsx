import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ItemCourses from './popular/ItemCourses';


interface CarouselItemType {
  icon: string;
  text: string;
  number: number;
}

const CarouselItemCourses = [
  {
    id: 1,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
  {
    id: 2,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
  {
    id: 2,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
  {
    id: 2,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
  {
    id: 2,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
  {
    id: 2,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
  {
    id: 2,
    image: "/images/AILecturer.jpg",
    title: "Learning JavaScript With Imagination",
    category: "Development",
    instructor: "David Millar",
    rating: 5,
    reviews: 5,
    price: 15.00,
  },
]


interface CarouselSpacingProps {
  items: CarouselItemType[];
}
export function CarouselSpacing({items}:CarouselSpacingProps) {
  return (
    <Carousel className="w-full max-w-4xl  ">
      <CarouselContent className="-ml-1">
        {items.map((item,index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <div className="p-1 ">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center" >
                  <span className="text-3xl" >{item.icon}</span>
                  <p className="text-xl font-semibold" >{item.text}</p>
                  <span className="text-lg" >{item.number}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export function CoursesCarousel() {
  return (
    <Carousel className="w-full max-w-5xl pt-10">
      <CarouselContent className="-ml-1 flex">
        {/* {CarouselItemCourses.map((course) => (
          <CarouselItem key={course.id} className="pl-10 md:basis-1/2 lg:basis-1/3">
            <ItemCourses 
              image={course.image}
              title={course.title}
              category={course.category}
              instructor={course.instructor}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
            />
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

