import React from 'react'
import analysis from './assests/images/analysis.png'
import creator from './assests/images/creator.png'
import leadership from './assests/images/leadership.png'
import community from './assests/images/community.png'
import '../App.css'
import Github from './github'
import { aboutData } from './data';

function About() {
  const { title, description, services } = aboutData;

  // Map the icon names from the aboutData to the imported image variables
  const images = {
    'analysis.png': analysis,
    'creator.png': creator,
    'leadership.png': leadership,
    'community.png': community
  };

  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">{title}</h2>
        </header>
        <section className="about-text">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </section>
        <section className="service">
          <h3 className="h3 service-title">What I'm Doing</h3>
          <ul className="service-list">
            {services.map((service, index) => (
              <li key={index} className="service-item">
                <div className="service-icon-box">
                  <img
                    src={images[service.icon]} // Dynamically references the images using the corrected object
                    alt={service.title}
                    width={40}
                  />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{service.title}</h4>
                  <p className="service-item-text">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <Github />
      </article>
    </>
  );
}

export default About;
