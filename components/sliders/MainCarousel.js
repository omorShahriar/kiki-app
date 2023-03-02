"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { getStrapiMedia } from "@/lib/media";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={50}
    >
      {slides.map((slide) => {
        const { imageUrl, width, height } = getStrapiMedia(slide.image);
        return (
          <SwiperSlide key={slide.title}>
            <Link href={slide.url ? slide.url : "#"}>
              <div className="m-2 relative  ">
                <p className="md:text-3xl text-xl font-bold capitalize bg-gray-900/60 md:p-4 p-3 text-white absolute bottom-8 left-8 ">
                  {slide.title}
                </p>
                <Image
                  src={imageUrl}
                  width={width}
                  height={height}
                  alt={slide.title}
                  priority
                  className="rounded-md w-full max-h-[calc(100vh-172.65px-16px)]  object-cover object-center  "
                />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
