"use client";
import ButtonAppointment from "../components/buttonClick/buttonAppointment";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Nav from "./nav";

import { Swiper, SwiperSlide } from "swiper/react";
import HeroCaroussel from "./heroCaroussel";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { carInterface } from "../interface/carInterface";

export default function CarShow({car} : {car : carInterface[]}) {

  return (
    <>
      
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {car.map((el , index)=>
        <SwiperSlide key={index}>
          <div
            className="w-screen h-screen"
            style={{
              backgroundImage:
                `url(${el.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              backgroundRepeat : "no-repeat"
            }}
          >
            <div className="h-full w-full bg-black bg-opacity-50">
              <div className="p-3"></div>
              <div className="h-[80vh]">
                <div className="h-5/6">
                  <h1 className="text-center uppercase font-extrabold text-5xl flex items-center h-1/2 justify-center">
                    {el.name}
                  </h1>
                </div>
                <div className="text-center flex justify-center gap-5 font-bold items-center">
                  <ButtonAppointment idCar={el.id}></ButtonAppointment>
                  <Link href={`/FrontOffice/details/${el.id}`}>details</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
    )}
      </Swiper>
    </>
  );
}
