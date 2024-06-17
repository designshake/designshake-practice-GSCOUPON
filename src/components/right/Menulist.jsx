import React from 'react'


const Menulist = () => {
  return (
    <>
      <section id='menulist'>
        <div className='download__wrap'>
          <div className='list__wrap'>
              <ul className='list__item'>
                <li>
                  <div>이미지1</div>
                  <p>서비스이용가이드</p>
                </li>
                <li>
                  <div>이미지2</div>
                  <p>자주하는질문</p>
                </li>
                <li>
                  <div>이미지3</div>
                  <p>대량발송/계약문의</p>
                </li>
                <li>
                  <div>이미지4</div>
                  <p>발송양식다운로드</p>
                </li>
                <li>
                  <div>이미지5</div>
                  <p>사업소개서다운로드</p>
                </li>
                <li>
                  <div>이미지6</div>
                  <p>상품목록다운로드</p>
                </li>
              </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menulist