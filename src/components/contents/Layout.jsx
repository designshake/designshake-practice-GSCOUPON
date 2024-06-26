import React from 'react'

import Logininfo from './Logininfo'
import Mainbanner from './Mainbanner'
import Hit from './Hit'
import Discount from './Discount'
import News from './News'
import Banner from './Banner'

const Layout = () => {
  return (
    <>
    <div className='content__wrap'>
        <div className='left'>
            <Mainbanner />
            <Hit />
            <Banner />
            <Discount />
            <News />
        </div>
        <div className='right'>
          <Logininfo />
        </div>
      </div>
    </>
  )
}

export default Layout