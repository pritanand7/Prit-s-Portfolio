import React from 'react';
import '../App.css';
import { resumeData } from './data';

function Resume() {
  const { title, experience, education, key_skill, skills } = resumeData;

  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">{title}</h2>
          {/* <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Work Experience</h3>
            </div>
            <ol className="timeline-list">
              {working_experience.map((working_experience, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    {working_experience.role} <span><strong>{working_experience.company}</strong></span>
                  </h4>
                  <span>{working_experience.duration}</span>
                </li>
              ))}
            </ol>
          </section> */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Industrial Trainings</h3>
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
              <h3 className="h3">Key Skills</h3>
            </div>
            <ol className="timeline-list">
              {key_skill.map((key_skill, index) =>
                key_skill.core_skills.map((skill, idx) => (
                  <li key={`${index}-${idx}`} className="timeline-item">
                    <h4 className="h4 timeline-item-title">{skill}</h4>
                  </li>
                ))
              )}
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Technical Skillset</h3>
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
