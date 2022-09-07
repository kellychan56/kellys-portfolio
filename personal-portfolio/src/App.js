import React from 'react';
import NavigationBar from './components/NavBar/NavigationBar';
import HomePage from './components/HomePage/HomePage'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'

import './App.css';

const App = () => {
  return (
    <>
      <body>
          <NavigationBar/>
          <HomePage/>
          <AboutMe/>
          <Projects/>
          <HomePage/>
          {/* ContactMe */}
      </body>
    </>
  );
}

export default App;
