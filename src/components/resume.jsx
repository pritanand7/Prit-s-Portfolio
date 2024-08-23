import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome} from '@fortawesome/free-brands-svg-icons';

// , faSass, faBootstrap, faGit, faNpm, faJs, faReact, faVuejs, faAngular, faFont, faFileCode, 
function Resume() {
  return (
    
  <><header>
      <h2 className="h2 article-title">Resume</h2>
      <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <ion-icon name="book-outline" />
      </div>
      <h3 className="h3">Experience</h3>
    </div>
    <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">• Project Intern <span><strong>Settlemint India</strong></span></h4>
        <span>May — July </span>
        <p className="timeline-text">
        Contributed to the Jharkhand PDMC project working as a technical cell support for the agriculture sector drafting SOP, offering implementation ideas and solutions to enhance the PDMC portal, gaining valuable experience in project management and data analysis.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">• Data Science Intern<span><strong>DataPlay</strong></span></h4>
        <span>March — June</span>
        <p className="timeline-text">
        Developed skills in SQL, Excel, and Power BI through hands-on projects. Conducted comprehensive Customer Behaviour Analysis to identify trends and insights. Created visualizations and reports to effectively communicate findings.
          
        </p>
      </li>
    </ol>
  </section>
    </header><section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline" />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        BCA Specialization with Data Science & Data Analytics
        </h4>
        <span>JECRC University [2021 — 2024]</span>
        <p className="timeline-text">
          I am pursing a BCA degree full time from an affilaite LCB College, under Guwahati University. Guwahati, Assam.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Higher Secondary</h4>
        <span>- B.V.B Vidyashram [2021]</span>
        <p className="timeline-text">
          I have completed my Higher Secondary from a reputed school Dronacharya Academy, Barpeta Road, Assam.
          I have secured 85% in my Higher Secondary Examination from AHSEC Board.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          High school
        </h4>
        <span>B.C.M Sr. Sec. School [2019]</span>
        <p className="timeline-text">
          I have completed my High School from one of the best school of North-east India Marian School.
          I have secured 73% in my High School Examination from SEBA Board.
        </p>
      </li>
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
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Programming Language</li>
        </h4>
        <span>1. C++ (Intermediate) </span>
        <span>2. SQL (Intermediate) </span>
        <span>3. Python (Intermediate)</span>
      </li>



      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Data Visualization Tools</li>
        </h4>
        <span>1. Power BI</span> 
        <span>2. Tableau </span>
        <span>3. Excel</span>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Developer Tools</li>
        </h4>
        <span>1. Windows OS [</span> 
        <span>2. Android OS</span> 
        <span>3. Linux OS </span>
        <span>4. Git & Github</span>
        <span>5. VS Code</span>
        <span>6. Netlify</span>
      </li>
      
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Creative Tools</li>
        </h4>
        <span>1. Video Editing</span> 
        <span>2. Adobe Photoshop</span> 
      </li>
      

    </ol>
  </section>

  {/* <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <ion-icon name="book-outline" />
      </div>
      <h3 className="h3">Front-end Technologies</h3>
    </div>
    <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Html-CSS</li>
        </h4>
        <span>Advance Level</span>
      </li>

      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Bootstrap</li>
        </h4>
        <span>Intermediate </span>
      </li>

      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>JQuery</li>
        </h4>
        <span>Advaance </span>
      </li>
      
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Scss</li>
        </h4>
        <span>Basics</span>
      </li>

      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>React</li>
        </h4>
        <span>Intermediate </span>
      </li>

      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Tailwind css</li>
        </h4>
        <span>Intermediate </span>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
        <li>Express.js</li>
        </h4>
        <span>Basics</span>
      </li>

    </ol>
  </section> */}










  {/* <section className="skill">
    <h3 className="h3 skills-title">My skills</h3> */}
    {/* <ul className="skills-list content-card">
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Web design</h5>
          <data value={80}>80%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "80%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Graphic design</h5>
          <data value={70}>70%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "70%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Branding</h5>
          <data value={90}>90%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "90%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">WordPress</h5>
          <data value={50}>50%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "50%" }} />
        </div>
      </li>
    </ul> */}
    

  {/* </section> */}


      </>
  );
}

export default Resume