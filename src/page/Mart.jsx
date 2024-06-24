import React from 'react'
import Main from '../components/section/Main'

import Categorycoffee from '../components/contents/Categorycoffee'
import Sublist from '../components/contents/Sublist'
import Pagenumbers from '../components/contents/Pagenumbers'

const Mart = () => {
  return (
   <Main>
    <section id='mart'>
      <h2>편의점/마트</h2>
      <Categorycoffee />
      <Sublist />
      <Pagenumbers />
    </section>
   </Main>
  )
}

export default Mart