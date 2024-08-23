import React from 'react'
import Icondesign from './assests/images/icon-design.svg'
import Icondev from './assests/images/icon-dev.svg'
import Iconapp from './assests/images/icon-app.svg'
import '../App.css'
import Github from './github'
function About() {
  return (
    <>
    <article className="about active" >

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
    <section className="about-text">
      <p>
      Hello! I’m Prit Anand, a tech enthusiast driven by a passion for innovation and a knack for problem-
      solving. I specialize in identifying patterns in data and bringing fresh, creative ideas to life, 
      especially within the Windows and Android ecosystems. My journey in technology is fueled by a deep 
      curiosity and a commitment to staying at the forefront of emerging trends.
      </p>
      <p>
      Beyond my professional work, I'm actively involved in the tech community. I’ve led projects like Yuva 
      Manobal, which focuses on enhancing mental health and well-being, and participated in significant events 
      like the Smart India Hackathon 2023 and HACKTOBER Fest 2023. Additionally, I share my knowledge through my 
      YouTube channel, Burst Tech, where since 2019, I’ve been creating content that guides others on technology 
      concepts, tips, and trends, helping them navigate the ever-evolving digital landscape.
      </p>
    </section>
    {/*
  - service
*/}
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Icondesign}
              alt="design icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Data Analysis & Visualization</h4>
            <p className="service-item-text">
            Transforming raw data into meaningful insights through advanced data analysis and visualization techniques. I specialize in creating 
            interactive dashboards and reports that help organizations make data-driven decisions and stay ahead in their industry.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Icondev}
              alt="Web development icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Tech Content Creation</h4>
            <p className="service-item-text">
            Producing engaging and informative content on the latest technology trends. As the creator of the Burst Tech YouTube channel, I 
            share tips, tricks, and deep dives into topics like the metaverse, Windows, and Android, making tech accessible and exciting for a 
            wide audience.
            </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Iconapp}
              alt="mobile app icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Project Leadership</h4>
            <p className="service-item-text">
            Leading innovative projects that drive positive change. From spearheading Yuva Manobal, a project focused on enhancing mental health 
            and well-being, to guiding teams in major tech events like Smart India Hackathon and HACKTOBER Fest, I bring vision and direction to 
            every project.
             </p>
          </div>
        </li>
        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={Icondev}
              alt="camera icon"
              width={40}
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Community Engagement</h4>
            <p className="service-item-text">
            Actively participating in and contributing to the tech community. I’m passionate about staying connected with like-minded 
            professionals and enthusiasts, continuously learning, and sharing knowledge through various platforms and events.
            </p>
          </div>
        </li>
      </ul>
    </section>
    {/*
  - testimonials
*/}
    {/* <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Daniel lewis
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-2.png"
                alt="Jessica miller"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Jessica miller
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-3.png"
                alt="Emily evans"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Emily evans
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item="">
            <figure className="testimonials-avatar-box">
              <img
                src="./assets/images/avatar-4.png"
                alt="Henry william"
                width={60}
                data-testimonials-avatar=""
              />
            </figure>
            <h4
              className="h4 testimonials-item-title"
              data-testimonials-title=""
            >
              Henry william
            </h4>
            <div className="testimonials-text" data-testimonials-text="">
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor
                sit amet, ullamcous cididt consectetur adipiscing elit, seds
                do et eiusmod tempor incididunt ut laborels dolore magnarels
                alia.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section> */}
    {/*
  - testimonials modal
*/}
    {/* <div className="modal-container" data-modal-container="">
      <div className="overlay" data-overlay="" />
      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn="">
          <ion-icon name="close-outline" />
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src="./assets/images/avatar-1.png"
              alt="Daniel lewis"
              width={80}
              data-modal-img=""
            />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title="">
            Daniel lewis
          </h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div data-modal-text="">
            <p>
              Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div> */}
    {/*
  - clients
*/}
    {/* <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>
      <ul className="clients-list has-scrollbar">
        <li className="clients-item">
          <a href="#">
            <img src={Logo1} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo2} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo3} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo4} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo5} alt="client logo" />
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src={Logo6} alt="client logo" />
          </a>
        </li>
      </ul>
    </section> */}
    <Github />
  </article>
  </>
  )
}

export default About