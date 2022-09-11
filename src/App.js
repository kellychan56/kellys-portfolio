import React from 'react';
import NavigationBar from './components/NavBar/NavigationBar';
import HomePage from './components/HomePage/HomePage'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe';
import './App.css';

const App = () => {
  return (
    <>
          <NavigationBar/>
      <body className='components'>
          <HomePage/>
          <AboutMe/>
          <Projects/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ContactMe/>
      </body>
    </>
  );
}

export default App;
