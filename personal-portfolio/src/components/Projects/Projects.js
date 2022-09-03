import React from 'react'
import ProjectItems from './ProjectItems'
import './Projects.css'

const Projects = () => {
  return (
    <>
        <section>
            <h2 id="projects">projects</h2>
            <div className="project-container">
                {ProjectItems.map((item, index) => {
                    return (
                        <>
                            <div className={item.cName}>
                                <img src={item.projectImg} alt="project photo"/>
                                <p>{item.description}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Projects
