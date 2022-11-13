import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <section id="about">
        <h1 className="component-headers">about me</h1>
        <div className="about-container">
          <p className="about-me-intro">
            My name is Kelly, and I'm a full-stack web developer currently based in San Diego, CA. Although I'm currently in San Diego, my roots are in Oakland, CA in the Bay Area! I love building things from Pokemon nanoblocks to IKEA furniture to websites! My journey as a software developer has just begun, so join me on my journey and see what I can do!
          </p>
          <div className='technologies-container'>
            <h3 className='technologies-heading'>Languages, <br/> Frameworks, <br/> Technologies <br/> that I use:</h3>
            <div className='technologies-list'>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>SQL</li>
              <li>PostgresQL</li>
              <li>Postman</li>
              <li>GitHub</li>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
