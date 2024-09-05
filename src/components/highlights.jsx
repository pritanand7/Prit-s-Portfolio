import React, { useState } from 'react';
import Portfolio1 from './assests/images/portfolio1.jpeg';
import '../../assets/css/style.css'
import Settlemint from './assests/images/settlemint.jpg';
import DataPlay from './assests/images/DataPlay.jpg';
import Azure from './assests/images/Azure.jpg';
import SIH from './assests/images/SIH.jpeg';
import Fiesta from './assests/images/fiesta.jpeg';
import Messi from './assests/images/messi.jpg';
import Google from './assests/images/google.jpeg';
import Connect from './assests/images/connect.png';





function Highlights() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [

                                            // Front-end Projects (HTML, CSS, JS):
      
{ id: 1, title: 'Yuva Manobal', category: 'projects', img: Portfolio1, link: 'https://yuva-manobal.netlify.app'},
{ id: 2, title: 'SettleMint India Internship...', category: 'achievements', img: Settlemint},
{ id: 3, title: 'DataPlay Internship...', category: 'achievements', img: DataPlay},
{ id: 4, title: "Attended Google Crowdsource Event and won some exciting goodies!", category: 'achievements', img: Google},
{ id: 5, title: "Personalized Connection Page1", category: 'projects', img: Connect, link: "https://pritanand7.github.io/"},
{ id: 6, title: 'Won a Microsoft Azure T-shirt in an Open Source quiz!', category: 'achievements', img: Azure},
{ id: 7, title: "My Speech at Placement Fiesta'24 Mahotsav!", category: 'achievements', img: Fiesta},
{ id: 8, title: 'SIH Hackathon 2023 :)', category: 'achievements', img: SIH},
{ id: 9, title: "Lionel Messi Sketch using Turtle - Python", category: 'projects', img: Messi, link: "https://github.com/pritanand7/Sketch-Drawing-of-Messi-s-Face-Python"},

      //React Projects




  ];

  // Sort projects in descending rder by id
  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = sortedProjects.filter(project =>
    activeFilter === 'All' || project.category === activeFilter.toLowerCase()
  );

  return (
    <div className='highlight'>
      <header >
        <h2 className="h2 article-title">Highlights</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={activeFilter === 'All' ? 'active' : ''}
              onClick={() => handleFilterClick('All')}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'projects' ? 'active' : ''}
              onClick={() => handleFilterClick('projects')}
            >
              Projects
            </button>
          </li>
          {/* <li className="filter-item">
            <button
              className={activeFilter === 'react' ? 'active' : ''}
              onClick={() => handleFilterClick('react')}
            >
              React
            </button> */}
          {/* </li> */}
          <li className="filter-item">
            <button
              className={activeFilter === 'Achievements' ? 'active' : ''}
              onClick={() => handleFilterClick('Achievements')}
            >
              Achievements
            </button>
          </li>
          <li className="filter-item">
            <button
              className={activeFilter === 'others' ? 'active' : ''}
              onClick={() => handleFilterClick('others')}
            >
              others
            </button>
          </li>
         
        </ul>
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link} target={project.title == 'Yuva Manobal' ? '_blank' : '_self'}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p1 className="project-sub-category">{project.subCategory}</p1>
                <p className="project-category">{project.category}</p>
                
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Highlights;

