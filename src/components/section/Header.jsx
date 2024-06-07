import React from 'react'

import gslogo from './../../assets/img/gstopbanner/imgTopBanner.png'

import { LuCalculator } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrUser } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
   <header id='header' role='banner'>
      <div id='mainLayout'>
         <div className='gsheader__banner'>
            <img src={gslogo} alt='gsbanner' />
         </div>
         <div className='gsheader__help'>
         <ul className='help'>
            <li>
               <a href='/'>GS&쿠폰 처음이세요?</a>
            </li>
            <li>
               <a href='/'>회원가입</a>
            </li>
            <li>
               <a href='/'>로그인</a>
            </li>
            <li>
               <a href='/'>고객센타</a>
            </li>
         </ul>
         </div>
         <div className='gsheader__main'>
            <h1>GS&쿠폰</h1>
            <div className='header__search'>검색부분</div>
            <div className='header__check'>
               <ul>
                  <li>
                     <a href='/'>
                        <div><GrUser /></div>
                        <span>마이페이지</span>
                     </a>
                  </li>
                  <li>
                     <a href='/' alt=''>
                        <div><AiOutlineShoppingCart /></div>
                        <span>장바구니</span>
                     </a>
                  </li>
                  <li>
                     <a href='/'>
                        <div><LuCalculator /></div>
                        <span>온라인견적서</span>
                     </a>
                  </li>
               </ul>
         </div>
         </div>
         <div className='gsheader__nav'>
            <nav className='header__menu'>
               <ul className='menu'>
                  <li>
                     <a href='/'><FiMenu />전체메뉴</a>
                  </li>
                  <li className='active'>
                     <a href='/specialcoffee'>초특가 Coffee Zone</a>
                  </li>
                  <li>
                     <a href='/coffee'>커피/음료</a>
                  </li>
                  <li>
                     <a href='/gift'>상품권</a>
                  </li>
                  <li>
                     <a href='/pay'>배달/페이</a>
                  </li>
                  <li>
                     <a href='/mart'>편의점/마트</a>
                  </li>
                  <li>
                     <a href='/cpb'>치킨/피자/버거</a>
                  </li>
                  <li>
                     <a href='/bread'>빵/아이스크림</a>
                  </li>
                  <li>
                     <a href='/oil'>주유</a>
                  </li>
                  <li>
                     <a href='/culture'>문화/생활</a>
                  </li>
                  <li>
                     <a href='/eat'>외식</a>
                  </li>
                  <li>
                     <a href='/culture'>문화/생활</a>
                  </li>
                  <li>
                     <a href='/delivery'>배송상품</a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   </header>
  )
}

export default Header