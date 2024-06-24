import React from 'react'
import Main from '../components/section/Main'

import Pagenumbers from '../components/contents/Pagenumbers'
import Sublist from '../components/contents/Sublist'
import Categorycoffee from '../components/contents/Categorycoffee'

const Eat = () => {
  return (
    <Main>
      <section id='eat'>
        <h2>외식</h2>
          <Categorycoffee />
          <Sublist />
          <Pagenumbers />
      </section>
    </Main>
  )
}

export default Eat