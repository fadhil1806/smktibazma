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

// New Carousel component with props
export default function Carousel({ slides }) {
    return (
        <div className='w-full h-[615px]'>
            <Swiper
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
                {slides.map((slide: any, index: any) => (
                    <SwiperSlide key={index}>
                        <div className='relative w-full h-full'>
                            <div className='absolute inset-0'>
                                <img
                                    src={slide.imgSrc}
                                    alt={slide.heading}
                                    className='w-full h-full object-cover object-center'
                                />
                            </div>

                            <div className='absolute inset-y-0 left-0 w-full bg-gradient-to-tr from-blue-800 to-transparent'></div>

                            <div className='relative z-10 w-full flex items-end h-full'>
                                <div className='text-white w-full inline-flex mx-auto my-auto px-4 max-w-7xl items-center mb-10'>
                                    <h1 className='text-6xl font-black leading-[64px] w-1/2 uppercase'>
                                        {slide.heading}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
