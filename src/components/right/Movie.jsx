import React from 'react'
import { Link } from 'react-router-dom'
import youtube from '../../assets/img/gs/movie01.png'
import logo from '../../assets/img/gs/youtube.png'

const Movie = () => {
  return (
    <>
      <section id='youtube'>
        <div className='youtube__inner'>
          <div className='youtube__thumb'>
            <Link to='/'>
              <img src={youtube} alt='gs%쿠폰사용설명서' />
              <img src={logo} className='logo' alt='youtub로고' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie