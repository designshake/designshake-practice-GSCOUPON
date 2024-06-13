import React from 'react'
import { Link } from 'react-router-dom'
import { discountText } from '../../data/discount'


const Discount = () => {
  return (
      <section id='discount'>
        <h2 className='index__title'>지금 <span className='green__text'>가장 많이</span> 할인해요!</h2>
          
          {discountText.map ((discount, key) => (
            <div className='discount__inner' key={key}>
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
           ))}
      </section>
  )
}

export default Discount