import React from 'react';
import NavigationBar from './components/NavBar/NavigationBar';
import HomePage from './components/HomePage/HomePage'
import AboutMe from './components/AboutMe/AboutMe'
import './App.css';

const App = () => {
  return (
    <>
      <body>
        <NavigationBar/>
        <HomePage/>
        <AboutMe/>
        <HomePage/>
        <HomePage/>
      </body>
    </>
  );
}

export default App;
