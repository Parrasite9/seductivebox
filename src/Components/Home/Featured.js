import React from 'react'
import '../../CSS/Home/Featured.css'
function Featured() {
  return (
    <div className='Featured'>
        <div className="featured__header">
            <h2>AS FEATURED IN</h2>
        </div>

      <div className="featured__container">
        {/* FEATURED IMAGE  */}
        <div className="featured__img">
          <img src="images/featured/yahoo.png" alt="yahoo" />
        </div>

        {/* FEATURED IMAGE  */}
        <div className="featured__img">
          <img src="images/featured/entrep.png" alt="entrepreneur" />
        </div>

        {/* FEATURED IMAGE  */}
        <div className="featured__img">
          <img src="images/featured/forbes.png" alt="forbes" />
        </div>

        {/* FEATURED IMAGE  */}
        <div className="featured__img">
          <img src="images/featured/nbc.png" alt="nbc" />
        </div>

      </div>
    </div>
  )
}

export default Featured
