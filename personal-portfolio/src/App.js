import React from 'react';
import NavigationBar from './components/NavBar/NavigationBar';
import HomePage from './components/HomePage/HomePage'
import './App.css';

const App = () => {
  return (
    <>
      <body>
        <NavigationBar/>
        <HomePage/>
        <HomePage/>
        <HomePage/>
        <HomePage/>
      </body>
    </>
  );
}

export default App;
