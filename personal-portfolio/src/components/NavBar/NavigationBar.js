import React, {useState} from "react"
import NavItems from "./NavItems"
import './NavigationBar.css'

const NavigationBar = () => {

    return (
        <>
            <nav className="navbar">
                <h1 className="logo">Kelly Chan</h1>
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
