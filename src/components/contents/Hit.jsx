import React from 'react'

import { Link } from 'react-router-dom'
import { hitText } from '../../data/hit'


const Hit = () => {
  return (
    <section id='hit'>
      <h2 className='index__title'>지금 <span className='green__text'>가장 많이</span> 구매해요!</h2>
      {hitText.map ((hit, key)=> (
        <div className='hit__inner' key={key}>
        <div className='hit__thumb'>
            <div className='tag__wrap'>
              <div className='tag__date'>60일</div>
              <div className='tag__special'>특가</div>
            </div>
            <Link to={hit.page}>
              <img src={hit.img} alt={hit.desc}></img>
            </Link>
        </div>
        <div className='hit__title'>{hit.title}</div>
        <div className='hit__text'>
          <span className='price'>{hit.price}</span>
          <span className='fixprice'>{hit.fixprice}</span>
          <span className='discount'>{hit.discount}</span>
        </div>
      </div>
      ))}
    </section>
  )
}

export default Hit