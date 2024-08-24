import React from 'react';
import Aside from './components/aside';
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
function App() {
    
  let component
  switch (window.location.pathname) {
    case '/':
      component = <About />
      break
    case '/resume':
      component = <Resume />
      break
    case '/portfolio':
      component = <Portfolio />
      break
    case '/blog':  
      component = <Blog />
      break
  }
  
  
  
  
  return (
    <main>
      <Aside />
    <div className="main-content">
    <Navbar /> 
   
    {component}
    {/* <About />  
    <Resume /> 
    <Portfolio />
    <Blog />
    <Contact /> */}
   
    </div>
  </main>

  )
}
export default App
