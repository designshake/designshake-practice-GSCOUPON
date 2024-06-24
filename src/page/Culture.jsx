import React from 'react'
import Main from '../components/section/Main'
import Pagenumbers from '../components/contents/Pagenumbers'
import Sublist from '../components/contents/Sublist'
import Categorycoffee from '../components/contents/Categorycoffee'

const Culture = () => {
  return (
    <Main>
      <section id='culture'>
        <h2>문화생활</h2>
        <Categorycoffee />
        <Sublist />
        <Pagenumbers />
      </section>
    </Main>
  )
}

export default Culture