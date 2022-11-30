import React from "react";
import "./Login.css";
// import pic from "../img/screenshot1.png";
import logo from "../img/logo.svg"
import pic1 from "../img/ItTndlZM2n2.png"
import googlePlay from "../img/BFthdeAc5KC.png";
import microsoft from "../img/XUCupIzGmzB.png";
import { AiFillFacebook } from 'react-icons/ai';

function Login() {
  return (
    <div>
      <div className="login-page">

      <div>
        <img src={pic1} alt="instagram" className="phone"/>
      </div>

      <div className="genel">

        <div className="login-page__right">
          
          <div >
            <img src={logo} alt="instagram" />
          </div>

          <div className="login-page__input">
            <form style={{backgroundColor: "#FFFFFF"}}>
              <input placeholder="Telefon numarası, kullanıcı adı veya e-posta" />
              <input placeholder="Şifre" />
            </form>
          </div>

          <div>
            <button className="login-page__button disabled" >Giriş yap</button>
          </div>

          <div className="separator" style={{backgroundColor: "#FFFFFF"}}>YA DA</div>

          <div className="facebook">
            <AiFillFacebook fontSize="1.4rem" />
            <h6> Facebook ile Giriş Yap</h6>
          </div>
          <div style={{fontSize: "12px", marginTop: "12px"}}>Şifreni mi unuttun?
          </div>
          
        </div>


        <div className="login-page__right1">
          Hesabın yok mu? <span style={{color: "#0095F6", fontWeight: "500"}}>Kaydol</span> 
        </div>

        <div className="download">
          <span>Uygulamayı indir.</span>
          <div className="img">
          <img src={microsoft} alt="Google Play'den Alın" width={"130px"}/>
          <img src={googlePlay} alt="Microsoft'tan edinin" width={"110px"}/>
          </div>
          
        </div>
      </div>

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
  );
}

export default Login;
