import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

interface Slide {
    imgSrc: string;
    heading: string;
    desc: string; // Add description field
}

interface CarouselProps {
    slides: Slide[];
}

// New Carousel component with props
export default function CarouselAsrama({ slides }: CarouselProps) {
    return (
        <div className='w-full h-[615px]'>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative w-full h-full'>
                            <div className='absolute inset-0'>
                                <img
                                    src={slide.imgSrc}
                                    alt="{slide.heading}"
                                    className='w-full h-full object-cover object-center'
                                />
                            </div>
                            <div className='absolute inset-y-0 left-0 w-full bg-gradient-to-r from-blue-800 to-transparent'></div>

                            <div className='relative z-10 w-full flex flex-col justify-between h-full p-4 mr-10'>
                                <div className='text-white w-full flex flex-col justify-between h-full'>
                                    <div className='md:flex md:items-end'>
                                        <h1 className='text-4xl md:text-6xl font-black leading-tight md:leading-[64px] uppercase'>
                                            {slide.heading}
                                        </h1>
                                    </div>
                                    <div className='mt-4 md:mt-0 md:ml-6'>
                                        <p className='text-lg'>
                                            {/* {slide.desc} */}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
