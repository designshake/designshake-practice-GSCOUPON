import React from 'react'
import Main from '../components/section/Main'

import Categorycoffee from '../components/contents/Categorycoffee'
import Sublist from '../components/contents/Sublist'
import Pagenumbers from '../components/contents/Pagenumbers'

const Specialcoffee = () => {
  return (
    <Main>
      <section id='specialcoffee'>
        <h2>초저가ZERO커피</h2>
        <Categorycoffee />
        <Sublist/>
        <Pagenumbers/>
      </section>
    </Main>
  )
}

export default Specialcoffee