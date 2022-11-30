import React from 'react'
import '../components/Profile3.css'
import uzbay from '../img/uzbay.jpg'
import '../components/footer.css'

function Profile3() {
  return (
    <div className='profile-3'>
        <div className='three-group'>
            <img src={uzbay} alt="uzbay" />
            <img src={uzbay} alt="uzbay" />
            <img src={uzbay} alt="uzbay" />
        </div>
        <div>
            <img src={uzbay} alt="uzbay" />
            <img src={uzbay} alt="uzbay" />
            <img src={uzbay} alt="uzbay" />
        </div>

        <div className="footer">

      <div className="footer__1">
        
          <div>Meta</div>
          <div>Hakkında</div>
          <div>Blog</div>
          <div>İş Fırsatları</div>
          <div>Yardım</div>
          <div>API</div>
          <div>Gizlilik</div>
          <div>Koşullar</div>
          <div>Başlıca Hesaplar</div>
          <div>Konu Etiketleri</div>
          <div>Konumlar</div>
          <div>Instagram Lite</div>
          <div>Kişi Yükleme ve Hesabı Olmayan Kişiler</div>
        
      </div>

      <div className="footer__2">

        <div>Türkçe</div>
        <div>© 2022 Instagram from Meta</div>

      </div>

      </div>
    </div>
  )
}

export default Profile3