import React from 'react';
import Aside from './components/aside';
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
// import Slideshow from './components/slideshow';
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
    case '/slideshow':
      component = <Slideshow />
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
    <Contact /> */}
   
    </div>
  </main>

  )
}
export default App
