import React from 'react'
import './Slider.scss'
import '../Global.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Slideimg1 from '../Hero_section.png';
import Slideimg2 from '../Hero_section (1).png';
import Slideimg3 from '../Hero_section (2).png';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const Slider = () => {
  return (
   <>
      <div className="container">

    <Swiper className="SwipContainer"
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      >

      <SwiperSlide className="SwipSingle">
            <img src={Slideimg1} alt="" />
      </SwiperSlide>

      <SwiperSlide className="SwipSingle">
            <img src={Slideimg3} alt="" />      </SwiperSlide>

      <SwiperSlide className="SwipSingle">
            <img src={Slideimg2} alt="" />
      </SwiperSlide>

      <SwiperSlide className="SwipSingle">
            <img src={Slideimg1} alt="" />
      </SwiperSlide>
    </Swiper>
      </div>
   </>
  )
}

export default Slider

