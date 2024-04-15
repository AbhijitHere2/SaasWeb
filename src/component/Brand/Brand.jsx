import React, { useRef, useState } from 'react';
import pic1 from '../images/brand/acme1.png';
import pic2 from '../images/brand/quantum2.png';
import pic3 from '../images/brand/echo3.png';
import pic4 from '../images/brand/celestia4.png';
import pic5 from '../images/brand/pulse5.png';
import pic6 from '../images/brand/apex5.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Brand.css'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const Brand = () => {
  return (
    <div className=" bg-gradient-to-r from-white via-slate-200 to-white py-10 ">

<Swiper
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide ><img className='h-[]  w-[]' src={pic1} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]' src={pic2} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]' src={pic3} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]'  src={pic4} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]' src={pic5} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]'src={pic6} alt="pic" /></SwiperSlide>
        <SwiperSlide ><img className='h-[]  w-[]' src={pic1} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]' src={pic2} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]' src={pic3} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]'  src={pic4} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]' src={pic5} alt="pic" /></SwiperSlide>
        <SwiperSlide><img className='h-[]  w-[]'src={pic6} alt="pic" /></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Brand