import React from 'react'

import Login from '../right/Login'
import { OnlineService } from '../right/OnlineService'
import Movie from '../right/Movie'
import Menulist from '../right/Menulist'

const Logininfo = () => {
  return (
    <>
      <Login />
      <OnlineService />
      <Menulist />
      <Movie />
    </>
  )
}

export default Logininfo