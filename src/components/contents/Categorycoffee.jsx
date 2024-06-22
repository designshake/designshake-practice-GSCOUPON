import React from 'react'

import { coffeelogoText } from '../../data/coffeecategory'
import { Link } from 'react-router-dom'

const Categorycoffee = () => {
  return (
    <>
      <section id='category'>
        <div className='category__wrap'>
          <div className='brand'>
            <div className='headerleft'>브랜드</div>
            <div className='brand__box'>
              <div className='brand__inner'>
                  <div className='box'>
                    <p className='center'>전체선택</p>
                  </div>
                  {coffeelogoText.map((coffeelogo, key) => (
                    <Link to={coffeelogo.page}>
                      <div className='box' key={key}>
                        <p>
                          <img src={coffeelogo.img} alt={coffeelogo.desc} />
                          </p>
                        <span>{coffeelogo.title}</span>
                      </div>
                    </Link>  
                   ))}
              </div>
            </div>
          </div>
          <div className='search'>
            <div className='headerright'>검색조건</div>
            <div className='search__box'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categorycoffee