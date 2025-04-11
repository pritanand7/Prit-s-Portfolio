import React from 'react';
import '../App.css';
import { resumeData } from './data';

function Resume() {
  const { title, job, experience, education, key_skill, skills } = resumeData;

  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">{title}</h2>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="business-outline" />
              </div>
              <h3 className="h3">Work Experience</h3>
            </div>
            <ol className="timeline-list">
              {job.map((item, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{item.rolee}</h4>
                  <span><h4>{item.companyy}</h4></span>
                  <p className="timeline-text">{item.descriptionn}</p>
                </li>
              ))}
            </ol>
          </section> 
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="folder-outline" />
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
                <ion-icon name="reorder-four-outline" />
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
                <ion-icon name="cloudy-outline" />
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
