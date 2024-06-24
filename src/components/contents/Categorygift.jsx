import React from 'react'
import Form from 'react-bootstrap/Form';


import { Link } from 'react-router-dom'
import { giftText } from '../../data/giftcategroy';

const Categorygift = () => {
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
                  {giftText.map((gift, key) => (
                    <Link to={gift.page}>
                      <div className='box' key={key}>
                        <p>
                          <img src={gift.img} alt={gift.desc} />
                          </p>
                        <span>{gift.title}</span>
                      </div>
                    </Link>  
                   ))}
              </div>
            </div>
          </div>
          <div className='search'>
            <div className='headerright'>검색조건</div>
            <div className='search__box'>
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="~3천원"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="3천원~5천원"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="5천원~1만원"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="5천원~1만원"
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      label="5천원~1만원"
                      name="group1"
                      type={type}
                      id={`inline-${type}-5`}
                    />
                    {/* <Form.Check
                      inline
                      disabled
                      label="3 (disabled)"
                      type={type}
                      id={`inline-${type}-3`}
                    /> */}
                  </div>
                ))}
              </Form>
              <div id='input__area'>
                <div>
                  <label>가격대</label>
                  <input 
                    type='text'
                    className='search__input'
                    placeholder='최저가격'
                    /> ~ <input 
                    type='text'
                    className='search__input'
                    placeholder='최고가격'
                  /> 
                </div>
                <div>
                  <label>상품명</label>
                    <input 
                      type='text'
                      className='search__input'
                      placeholder='상품명'
                    />
                </div>
              </div>
              <div id='btn__wrap'>
                <ul>
                  <li><button>적용</button></li>
                  <li><button>초기화</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categorygift