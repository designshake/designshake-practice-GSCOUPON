import React from 'react'

import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuCalculator } from "react-icons/lu";
import { GrUser } from "react-icons/gr";

import logo from '../../assets/img/gs/logo.png'

const Search = () => {
  return (
    <div>
      <div className='gsheader__main'>
        <h1>
          <Link to='/'>
            <img src={logo} alt='gs쿠폰' />
          </Link>
        </h1>
          <div className='header__search'>
            <label>
              <span className='ir'>검색</span>
            </label>
            <input
              type='search'
              name='searchInput'
              id='searchInput'
              placeholder='검색어를 입력하세요.'
              className='search__input'>
            </input>
          </div>
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
    </div>
  )
}

export default Search