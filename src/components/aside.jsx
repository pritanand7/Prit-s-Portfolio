import React from 'react'
import myAvatar from './assests/images/my-avatar.png';


function Aside() {

  
  return (
    <>

    <aside className="sidebar" data-sidebar>
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img
          src={myAvatar}
          alt="Prit Anand"
          width={80}
        />
      </figure>
      <div className="info-content">
        <h1 className="name" title="Prit Anand">
          Prit Anand
        </h1>
        <p className="title">Tech Nerd :) </p>
      

         


      </div>
      <button className="info_more-btn" data-sidebar-btn >
        <span>Show Contacts</span>
       
      </button>
       <ul className="social-list">
        <li className="social-item">
          <a href="https://github.com/pritanand7" className="social-link" target='_blank'>
            <ion-icon name="logo-github" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.youtube.com/@BurstTech" className="social-link" target='_blank'>
            <ion-icon name="logo-youtube" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://linkedin.com/in/pritanand7" className="social-link" target='_blank'>
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://twitter.com/pritanand7" className="social-link" target='_blank'>
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.instagram.com/pritanand7" className="social-link" target='_blank'>
            <ion-icon name="logo-instagram" />
          </a>
        </li>
      </ul>
    </div>
    <div className="sidebar-info_more">
      <div className="separator" />
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:snehapritanand@gmail.com" className="contact-link">
              snehapritanand@gmail.com
            </a>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="calendar-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <time dateTime="1982-06-23">October 30, 2002</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline" />
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>India</address>
          </div>
        </li>
      </ul>
      <div className="separator" />
     
    </div>
  </aside>
  </>
  )
}

export default Aside
