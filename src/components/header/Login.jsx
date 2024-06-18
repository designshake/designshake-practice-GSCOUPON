import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='gsheader__help'>
            <ul className='help'>
               <li>
                  <Link to={'/'}>GS&쿠폰 처음이세요?</Link>
               </li>
               <li>
                  <Link to={'/'}>회원가입</Link>
               </li>
               <li>
                  <Link to={'/'}>로그인</Link>
               </li>
               <li>
                  <Link to={'/'}>고객센타</Link>
               </li>
            </ul>
         </div>
    </>
  )
}

export default Login