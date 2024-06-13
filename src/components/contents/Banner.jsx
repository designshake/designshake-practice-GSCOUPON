import React from 'react'
import { Link } from 'react-router-dom'
import { bannerText } from '../../data/banners'

const Banner = () => {
  return (
    <section id='banner'>
      {bannerText.map((banner, key ) => (
        <div className='bannerimg' key={key}>
          <Link to={banner.page}>
            <img src={banner.img} alt={banner.title}></img>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Banner