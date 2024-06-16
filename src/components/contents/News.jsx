import React from 'react'
import { Link } from 'react-router-dom'
import { newsText } from '../../data/news'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const News = () => {
  return (
      <section id='news'>
        <div className='header__wrap'>
          <h2>GS 쿠폰 News</h2>
          <span>
            <Link to={'/news'}><HiOutlineArrowLongRight /></Link>
          </span>
        </div>
        {newsText.map ((news, key) => (
            <Link to={news.page} key={key}>
              <div className='news__wrap'>
                <span className='news__title'>{news.title}</span>
                <span className='news__date'>{news.date}</span>
              </div>
          </Link>
        ))}
      </section>
  )
}

export default News