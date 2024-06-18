import React from 'react'

import Login from '../right/Login'
import { OnlineService } from '../right/OnlineService'
import Movie from '../right/Movie'
import Menulist from '../right/Menulist'
import Middelbanner from '../right/Middelbanner'

const Logininfo = () => {
  return (
    <>
      <Login />
      <OnlineService />
      <Menulist />
      <Middelbanner />
      <Movie />
    </>
  )
}

export default Logininfo