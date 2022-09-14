import React from 'react'
import ProjectItems from './ProjectItems'
import './Projects.css'

const Projects = () => {
  return (
    <>
        <section id="Projects">
            <h2 id="projects">projects</h2>
            <div className="project-container">
                {ProjectItems.map((item) => {
                    return (
                        <>
                            <div className='project-item'>
                                <img className='project-img' src={require(`./${item.projectImg}`)} alt="project photo"/>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Technologies: {item.technologies}</p>
                                <div className='buttons'>
                                    <a href={item.projectUrl} target='_blank'><button> Try It Out </button></a>
                                    <a href={item.gitUrl} target='_blank'><button > GitHub </button></a>
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
