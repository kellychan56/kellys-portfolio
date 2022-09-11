import React from 'react'
import ProjectItems from './ProjectItems'
import './Projects.css'

const Projects = () => {
  return (
    <>
        <section id="Projects">
            <h2 id="projects">projects</h2>
            <div className="project-container">
                {ProjectItems.map((item, index) => {
                    return (
                        <>
                            <div className='project-item'>
                                <img className='project-img' src={require(`./${item.projectImg}.jpeg`)} alt="project photo"/>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className='buttons'>
                                    <button> Try It Out </button>
                                    <button> GitHub </button>
                                </div>
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
