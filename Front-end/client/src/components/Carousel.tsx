import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselItemType {
  icon: string;
  text: string;
  number: number;
}

interface CarouselSpacingProps {
  items: CarouselItemType[];
}
export function CarouselSpacing({items}:CarouselSpacingProps) {
  return (
    <Carousel className="w-full max-w-4xl pt-10 ">
      <CarouselContent className="-ml-1">
        {items.map((item,index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
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