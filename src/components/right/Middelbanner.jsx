import React from 'react'
import { middlebannerText } from '../../data/middlebanner'
import { Link } from 'react-router-dom'

const Middelbanner = () => {
  return (
    <>
      <section>
        {middlebannerText.map((middlebanner, key) => (
          <div key={key}>
            <Link to={middlebanner.page}>
                <img src={middlebanner.img} alt={middlebanner.title} />
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default Middelbanner