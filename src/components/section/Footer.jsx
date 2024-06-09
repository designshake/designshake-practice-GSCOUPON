import React from 'react'

import Company from '../footer/Company'
import Bank from '../footer/Bank'
import Cs from '../footer/Cs'

const Footer = () => {
  return (
    <footer id='footer' role='contentinfo'>
      <>
        <div className='footer__wrap'>
          <Company />
          <Bank />
          <Cs />
        </div>
      </>
    </footer>
  )
}

export default Footer