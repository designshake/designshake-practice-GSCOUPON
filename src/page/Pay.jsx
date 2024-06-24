import React from 'react'
import Main from '../components/section/Main'

import Categorycoffee from '../components/contents/Categorycoffee'
import Sublist from '../components/contents/Sublist'
import Pagenumbers from '../components/contents/Pagenumbers'

const Pay = () => {
  return (
   <Main>
    <section id='pay'>
      <h2>배달/페이</h2>
      <Categorycoffee />
      <Sublist/>
      <Pagenumbers />
    </section>
   </Main>
  )
}

export default Pay