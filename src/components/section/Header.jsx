import React from 'react'

import Banner from '../header/Banner'
import Login from '../header/Login'
import Search from '../header/Search'
import Menu from '../header/Menu'

const Header = () => {
  return (
   <header id='header' role='banner'>
      <div id='mainLayout'>
         <Banner />
         <Login />
         <Search />
         <Menu />
      </div>
   </header>
  )
}

export default Header