import React from 'react'

import { menulistText } from '../../data/menulist'
import { Link } from 'react-router-dom'

const Menulist = () => {
  return (
    <>
      <section id='menulist'>
        <div className='download__wrap'>
          <div className='list__wrap'>
              <ul className='list__item'>
                {menulistText.map((menulist, key) => (
                  <li key={key}>
                    <Link to={'/'}>
                      <div>
                        <img src={menulist.img} />
                      </div>
                        <p>{menulist.title}</p>
                    </Link>
                  </li>
                ))}
                
              </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menulist