import React from 'react'

import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { HiChevronDoubleRight } from "react-icons/hi2";

import { Link } from 'react-router-dom';


const Pagenumbers = () => {
  return (
    <section id='pagenumbers'>
      <div className='pagination'>
        <ul>
          <Link to='/'><li className='left'><HiChevronDoubleLeft /></li></Link>
          <Link to='/'><li className='double__left'><HiChevronLeft /></li></Link>
          <Link tp='/' ><li className='on'>1</li></Link>
          <Link to='/'><li>2</li></Link>
          <Link to='/'><li>3</li></Link>
          <Link to='/'><li>4</li></Link>
          <Link to='/'><li>5</li></Link>
          <Link to='/'><li>6</li></Link>
          <Link to='/'><li>7</li></Link>
          <Link to='/'><li>8</li></Link>
          <Link to='/'><li>9</li></Link>
          <Link to='/'><li>10</li></Link>
          <Link to='/'><li className='right'><HiChevronRight /></li></Link>
          <Link to='/'><li className='double__right'><HiChevronDoubleRight /></li></Link>
        </ul>
      </div>
    </section>
  )
}

export default Pagenumbers