import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardFooter, Button, Image } from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const CarouselAsrama: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}  // Set default for mobile
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 }, // For small screens
          768: { slidesPerView: 3 }, // For tablets
          1024: { slidesPerView: 4 }, // For desktops
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                <h4 className="text-black font-medium text-2xl">Acme camera</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://nextui.org/images/card-example-6.jpeg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselAsrama;
