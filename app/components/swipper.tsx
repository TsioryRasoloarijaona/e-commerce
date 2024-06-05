"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export function SwipperComponent() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwipe " >
        <SwiperSlide className="w-full">
          <div className="relative w-[800px] h-[87vh]">
            <Image
              src="https://media.zenfs.com/fr/sport_auto_fr_articles_567/a15833aa57478a65b7bcc86ea10c9e3c" // Remplacez par le chemin réel vers votre image
              alt="Description de l'image"
              layout="fill"
              objectFit="cover" // Assurez-vous que l'image couvre entièrement le conteneur sans déformation
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="relative w-[800px] h-[87vh]">
            <Image
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj_roadster/2021/03_22/aventador_svj_r_s3_m.jpg" // Remplacez par le chemin réel vers votre image
              alt="Description de l'image"
              layout="fill"
              objectFit="cover" // Assurez-vous que l'image couvre entièrement le conteneur sans déformation
            />
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
