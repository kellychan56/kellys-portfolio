import React from 'react'
import './HomePage.css'
import WindChime from './wind-chime-2.jpeg'

const HomePage = () => {
    return (
        <>
        <section>
            <div className="home-container" id="homepage">
                <div className="home-item">
                    <h1 className="title">hi, i'm kelly chan</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="home-item2">
                    <img id="wind-chime" src={WindChime} alt="cute icons"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default HomePage
