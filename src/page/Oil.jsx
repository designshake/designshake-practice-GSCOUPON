import React from 'react'
import Main from '../components/section/Main'

import Categorycoffee from '../components/contents/Categorycoffee'
import Sublist from '../components/contents/Sublist'
import Pagenumbers from '../components/contents/Pagenumbers'

const Oil = () => {
  return (
    <Main>
      <section id='oil'>
        <h2>석유</h2>
        <Categorycoffee />
        <Sublist />
        <Pagenumbers />
      </section>
    </Main>
  )
}

export default Oil