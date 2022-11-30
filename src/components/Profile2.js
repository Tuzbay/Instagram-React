import React from 'react'
import '../components/Profile2.css'

function profile2() {
  return (
    <div className='profile2'>
        <div className='history'>
        <div className='history__item'></div>
        <div><b>Yeni</b></div>
        
      </div>
      <hr></hr>

      <div className='profile__content'>
        <div className='active'>GÖNDERİLER</div>
        <div>KAYDEDİLENLER</div>
        <div>ETİKETLENENLER</div>
      </div>
    </div>
  )
}

export default profile2