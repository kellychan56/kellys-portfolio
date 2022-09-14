import React from 'react'
import './HomePage.css'
import MyPhoto from './my-photo.jpg'

const HomePage = () => {
    return (
        <>
        <section id="HomePage">
            <div className="home-container" id="homepage">
                <div className="home-item">
                    <h1 className="title">Welcome to my portfolio!</h1>
                    <p className="home-intro"> Join me on my journey as a full-stack web developer  </p>
                </div>
                <div className='home-item2-container'>
                    <div className="home-item2">
                        <img id="my-photo" src={MyPhoto} alt="cute icons"/>
                        <p className='name-intro'> hi, i'm kelly chan</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomePage
