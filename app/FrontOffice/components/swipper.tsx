"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export function SwipperComponent({ urls }: { urls: string[] }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwipe ">
        {urls.map((url, index) => (
          <SwiperSlide className="w-full" key={index}>
            <div className="relative lg:w-[800px]  lg:h-[80vh] md:w-screen md:h-[50vh] w-screen h-[200px]">
              <Image
                src={url}
                alt="Description de l'image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
