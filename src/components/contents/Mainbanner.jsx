import React  from 'react'
import { swiperText } from '../../data/swiper'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Mainbanner = () => {
  return (
    <>
      <section id='main__banner'>
        <div className='banner__inner'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {swiperText.map ((swiper, key) => (
              <SwiperSlide>
                <div className='mainbanner'>
                  <Link to={'swiper.page'}>
                    <img src={swiper.img} alt={swiper.title}/>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Mainbanner