import React from 'react'

import { coffeeViewerText } from '../../data/subcoffee'
import { Link } from 'react-router-dom'

const Sublist = () => {
  return (
    <>
      <section id='sublist'>
        <div className='font__wrap'>
          <p className='title'>총 상품이 <span className='red'>420</span>개 있습니다.</p>
          <div className='font__lsit'>
            <ul>
              <Link to='/'><li className='on'>유효기간순</li></Link>
              <Link to='/'><li>최신등록순</li></Link>
              <Link to='/'><li>인기순</li></Link>
              <Link to='/'><li>낮은가격순</li></Link>
              <Link to='/'><li>높은가격순</li></Link>
              <Link to='/'><li>할인율순</li></Link>
            </ul>
          </div>
        </div>
        <div className='sublist__inner'>
          {coffeeViewerText.map ((coffee, key) => (
            <div className='sublist__box' key={key}>
              <Link to={coffee.page}>
                <div className='sublist__thumb'>
                  <div className='tag__wrap'>
                    <div className='tag__date'>60일</div>
                    <div className='tag__special'>특가</div>
                  </div>
                  <img src={coffee.img} alt={coffee.desc} />
                </div>
              </Link>
            <div className='sublist__text'>
              <p>{coffee.title}</p>
              <div className='sublist__group'>
                <span className='txt__gray'>{coffee.price2}</span>
                <span>{coffee.price}</span>
                <span className='txt__red'>{coffee.discount}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Sublist