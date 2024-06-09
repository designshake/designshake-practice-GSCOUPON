import React from 'react'

const Company = () => {
  return (
    <div className='company__info'>
      <p>COMPANY INFO</p>
      <div className='list__wrap'>
        <ul>
            <li>GS엠비즈 주식회사</li>
            <li>대표이사 : 허철홍</li>
            <li>주소 : [07207] 서울시 영등포구 양평로21길 26 26 아이에스비즈타워 24층</li>
          </ul>
          <ul>
            <li>사업자 등록번호 : 214-81-65071</li>
            <li>통신판매신고 : 2019-서울영등포-0189</li>
            <li>개인정보보호 책임자 : 남택민</li>
          </ul>
          <ul>
            <li>T : 1544-0009</li>
            <li>F : 02-1234-8990</li>
        </ul>
      </div>
      <p className='copyright'>COPYRIGHTⓒ GSMbiz.ALL RIGHT RESERVED.</p>
    </div>
  )
}

export default Company