import React from 'react'
import { Link } from 'react-router-dom';

import { FiMenu } from "react-icons/fi";

//페이지 하나로 우선 링크 걸어줌
const Menu = () => {
  return (
    <div>
      <div className='gsheader__nav'>
            <nav className='header__menu'>
               <ul className='menu'>
                  <li>
                     <Link to={'/'}><FiMenu />전체메뉴</Link>
                  </li>
                  <li className='active'>
                     <Link to={'/Specialcoffee'}>초특가 Coffee Zone</Link>
                  </li>
                  <li>
                     <Link to={'/coffee'}>커피/음료</Link>
                  </li>
                  <li>
                     <Link to={'/gift'}>상품권</Link>
                  </li>
                  <li>
                     <Link to={'/pay'}>배달/페이</Link>
                  </li>
                  <li>
                     <Link to={'/mart'}>편의점/마트</Link>
                  </li>
                  <li>
                     <Link to={'/cpb'}>치킨/피자/버거</Link>
                  </li>
                  <li>
                     <Link to={'/bread'}>빵/아이스크림</Link>
                  </li>
                  <li>
                     <Link to={'/oil'}>주유</Link>
                  </li>
                  <li>
                     <Link to={'/eat'}>외식</Link>
                  </li>
                  <li>
                     <Link to={'/culture'}>문화/생활</Link>
                  </li>
                  <li>
                     <Link to={'/delivery'}>배송상품</Link>
                  </li>
               </ul>
            </nav>
         </div>
    </div>
  )
}

export default Menu