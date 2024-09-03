import React from 'react';
import '../App.css';
import { resumeData } from './data';

function Resume() {
  const { title, experience, education, skills } = resumeData;

  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">{title}</h2>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              {experience.map((item, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    {item.role} <span><strong>{item.company}</strong></span>
                  </h4>
                  <span>{item.duration}</span>
                  <p className="timeline-text">{item.description}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              {education.map((item, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{item.degree}</h4>
                  <span>{item.institution} {item.duration}</span>
                  <p className="timeline-text">{item.description}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Professional Skillset</h3>
            </div>
            <ol className="timeline-list">
              {skills.map((skillCategory, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{skillCategory.category}</h4>
                  {skillCategory.skills.map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                  ))}
                </li>
              ))}
            </ol>
          </section>
        </header>
      </article>
    </>
  );
}

export default Resume;
