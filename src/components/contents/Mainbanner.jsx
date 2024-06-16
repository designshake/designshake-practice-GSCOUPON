import React  from 'react'

import imgViewer01 from '../../assets/img/gstopbanner/imgViewer01.jpg'
// import imgViewer02 from '../../assets/img/gstopbanner/imgViewer02.jpg'
// import imgViewer03 from '../../assets/img/gstopbanner/imgViewer03.jpg'
// import imgViewer04 from '../../assets/img/gstopbanner/imgViewer04.jpg'
// import imgViewer05 from '../../assets/img/gstopbanner/imgViewer05.jpg'
// import imgViewer06 from '../../assets/img/gstopbanner/imgViewer06.jpg'

const Mainbanner = () => {
  return (
    <>
      <section id='main__banner'>
          <ul className='banner__wrap'>
            <li>
                <img src={imgViewer01} alt=''/>
            </li>
            {/* <li>
                <img src={imgViewer02} alt=''/>
            </li>
            <li>
                <img src={imgViewer03} alt=''/>
            </li>
            <li>
                <img src={imgViewer04} alt=''/>
            </li>
            <li>
                <img src={imgViewer05} alt=''/>
            </li>
            <li>
                <img src={imgViewer06} alt=''/>
            </li> */}
          </ul>
      </section>
    </>
  )
}

export default Mainbanner