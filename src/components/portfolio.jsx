import React, { useState } from 'react';
import Table from './assests/images/Table.png';
import Portfolio1 from './assests/images/portfolio1.jpeg';
// import Settlemint from './assests/images/Settlemint';





function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [

                                            // Front-end Projects (HTML, CSS, JS):
      
{ id: 1, title: 'Yuva Manobal', category: 'projects', img: Portfolio1, link: 'https://yuva-manobal.netlify.app'},
{ id: 2, title: 'Settlemint India Internship', category: 'achievements', img: Portfolio1, link: 'https://user-input-table.netlify.app/' },
{ id: 3, title: 'User-Input-Table', category: 'Projects', subCategory: 'html-css-js', img: Table, link: 'https://user-input-table.netlify.app/' },
{ id: 4, title: 'User-Input-Table', category: 'Projects', subCategory: 'html-css-js', img: Table, link: 'https://user-input-table.netlify.app/' },
{ id: 5, title: 'User-Input-Table', category: 'Projects', subCategory: 'html-css-js', img: Table, link: 'https://user-input-table.netlify.app/' },
{ id: 6, title: 'User-Input-Table', category: 'Projects', subCategory: 'html-css-js', img: Table, link: 'https://user-input-table.netlify.app/' },
{ id: 7, title: 'User-Input-Table', category: 'Projects', subCategory: 'html-css-js', img: Table, link: 'https://user-input-table.netlify.app/' },

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
    <>
      <header>
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
    </>
  );
}

export default Portfolio;

