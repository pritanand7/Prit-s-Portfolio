import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aside from './components/aside';
import Navbar from './components/navbar';
import About from './components/about';
import Highlights from './components/highlights';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <main>
        <Aside />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
