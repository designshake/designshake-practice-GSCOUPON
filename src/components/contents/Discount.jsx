import React from 'react'
import { Link } from 'react-router-dom'
import { discountText } from '../../data/discount'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const Discount = () => {
  return (
      <section id='discount'>
        <h2 className='index__title'>지금 <span className='green__text'>가장 많이 할인</span> 해요!</h2>
          <Swiper 
            navigation={true} modules={[Navigation]}
            slidesPerView={5}
              spaceBetween={15}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
          >
            {discountText.map ((discount, key) => (
              <SwiperSlide  key={key}>
                <div className='discount__inner'>
                  <div className='discount__thumb'>
                      <div className='discount__wrap'>
                        <div className='tag__special'>특가</div>
                      </div>
                      <Link to={discount.page}>
                        <img src={discount.img} alt={discount.desc}></img>
                      </Link>
                  </div>
                  <div className='discount__title'>{discount.title}</div>
                  <div className='discount__text'>
                    <span className='price'>{discount.price}</span>
                    <span className='fixprice'>{discount.fixprice}</span>
                    <span className='discount'>{discount.discount}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
  )
}

export default Discount