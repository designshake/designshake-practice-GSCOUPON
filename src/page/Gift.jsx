import React from 'react'
import Main from '../components/section/Main'

import Sublist from '../components/contents/Sublist'
import Pagenumbers from '../components/contents/Pagenumbers'
import Categorygift from '../components/contents/Categorygift'

const Gift = () => {
  return (
    <Main>
      <section id='gift'>
        <h2>상품권</h2>
        <Categorygift />
        <Sublist/>
        <Pagenumbers />
      </section>
    </Main>
  )
}

export default Gift