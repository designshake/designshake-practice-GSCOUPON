import React from 'react'

import onlineicon from '../../assets/img/gsicon/main_quick_cate_login01.png'
import { Link } from 'react-router-dom';
import { onlineText } from '../../data/onlinequtation';

export const OnlineService = () => {
  return (
    <>
      <section id='onlineService'>
        <Link to={'/'}>
          <div className='online__wrap'>
              <div className='icon__area'>
                <img src={onlineicon} alt='온라인견적서' />
                <span className='online__index'>온라인견적서</span>
              </div>
              
                <div className='online__list'>
                  {onlineText.map ((online, key)=> (
                  <ul>
                    <li key={key}>
                      <span>{online.icon}</span>
                      {online.title}
                    </li>
                  </ul>
                  ))}
              </div>
          </div>
        </Link>
      </section>
    </>
  )
}
