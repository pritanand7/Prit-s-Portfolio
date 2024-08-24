import React from 'react'
import analysis from './assests/images/analysis.png'
import creator from './assests/images/creator.png'
import leadership from './assests/images/leadership.png'
import community from './assests/images/community.png'
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
              src={analysis}
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
              src={creator}
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
              src={leadership}
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
              src={community}
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

    <Github />
  </article>
  </>
  )
}

export default About