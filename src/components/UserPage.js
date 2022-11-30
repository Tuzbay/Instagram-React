import React from 'react'
import './UserPage.css'
import logo from '../img/logo.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Login from '../components/Login'
// import Profile from '../components/Profile';



function UserPage() {


  return (

    <div className='sidebar'>
      
      <div class="sidebar-header">
        <img class="logo-img" src={logo} alt="instagram-logo"/>
        <i className='logo-icon'> <InstagramIcon fontSize='large' /> </i>
      </div>

      <nav className='nav'>
        <div>

          <a href={Login}>
            <span>
              <div> <HomeOutlinedIcon fontSize='large'/> </div>
              <span>Ana Sayfa</span>
            </span>
          </a>

          <a href={Login}>
            <span>
              <div> <SearchIcon fontSize='large' /> </div>
              <span>Arama</span>
            </span>
          </a>

          <a href={Login}>
            <span>
              <div> <ExploreOutlinedIcon fontSize='large' /> </div>
              <span>Keşfet</span>
            </span>
          </a>

          <a href={Login}>
            <span>
              <div> <EmailOutlinedIcon fontSize='large' /></div>
              <span>Mesajlar</span>
            </span>
          </a>

          <a href={Login}>
            <span>
              <div><FavoriteBorderOutlinedIcon fontSize='large' /></div>
              <span>Bildirimler</span>
            </span>
          </a>

          <a href={Login}>
            <span>
              <div><AddBoxOutlinedIcon fontSize='large' /> </div>
              <span>Oluştur</span>
            </span>
          </a>

          <a href={Login}>
            <span>
              <div><AccountCircleOutlinedIcon fontSize='large' /></div>
              <span>Profil</span>
            </span>
          </a>

          

        </div>

      <div className='alt'>
      <a href={Login}>
            <span >
              <div><MenuOutlinedIcon fontSize='large' /> </div>
              <span>Daha Fazla</span>
            </span>
          </a>
      </div>
        
        
      </nav>

      
    </div>
    

  )
}

export default UserPage;