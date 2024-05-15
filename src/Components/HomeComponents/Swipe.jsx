import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.png'
import slide2 from '../../assets/home/slide2.png'
import slide3 from '../../assets/home/slide3.png'
import slide4 from '../../assets/home/slide4.png'
const Swipe = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src={slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide1} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Swipe;