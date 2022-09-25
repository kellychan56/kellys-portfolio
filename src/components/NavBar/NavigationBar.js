import React, {useState, useEffect} from "react"
import NavItems from "./NavItems"
import './NavigationBar.css'

const NavigationBar = () => {
    const [stickyClass, setStickyClass] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar)
        return () => window.removeEventListener('scroll', stickNavbar)
    }, [])

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 5 ? setStickyClass('sticky-nav') : setStickyClass('')
        }
    }


    return (
        <>
            <nav className={`navbar ${stickyClass}`}>
                <a className="logo" href ="https://kellychan56.netlify.app/">Kelly Chan</a>
                <ul className="menu">
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.itemTitle}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar
