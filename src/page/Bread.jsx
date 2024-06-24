import React from 'react'
import Main from '../components/section/Main'

import Pagenumbers from '../components/contents/Pagenumbers'
import Categorycoffee from '../components/contents/Categorycoffee'
import Sublist from '../components/contents/Sublist'

const Bread = () => {
  
  return (
    <Main>
      <section id='bread'>
        <h2>빵/아이스크림</h2>
        <Categorycoffee />
        <Sublist />
        <Pagenumbers />
      </section>
    </Main>
  )
}

export default Bread