import React from 'react'
import Main from '../components/section/Main'
import Categorycoffee from '../components/contents/Categorycoffee'
import Pagenumbers from '../components/contents/Pagenumbers'
import Sublist from '../components/contents/Sublist'

const Coffee = () => {

  return (
    <Main>
      <section id='coffee'>
        <h2>커피/음료</h2>
        <Categorycoffee />
        <Sublist />
        <Pagenumbers />
      </section>
    </Main>
  )
}

export default Coffee