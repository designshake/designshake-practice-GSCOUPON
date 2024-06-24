import React from 'react'
import Main from '../components/section/Main'
import Pagenumbers from '../components/contents/Pagenumbers'
import Sublist from '../components/contents/Sublist'
import Categorycoffee from '../components/contents/Categorycoffee'

const Delivery = () => {
  return (
    <Main>
      <section id='delivery'> 
        <h2>배송상품</h2>
        <Categorycoffee />
        <Sublist/>
        <Pagenumbers />
      </section>
    </Main>
  )
}

export default Delivery