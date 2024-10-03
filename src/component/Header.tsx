import "./Header.scss";
import React, { useState } from "react";
import close  from "../assests/close.svg";
import open from "../assests/open.svg"
import HeroComponent from "./HeroComponent/HeroComponent";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";

const Header: React.FC = () => {

    const [showHeader, setShowHeader] = useState(false)
    const navbar_heading = [
        {
            "heading": "About Us",
            "url": "#url"
        },
        {
            "heading": "Skills",
            "url": "#skills"
        },
        {
            "heading": "Expirience",
            "url": "#expirience"
        },
        {
            "heading": "Projects",
            "url": "#project"
        }
    ]

    return (
        <>
            <div className="desktop-container">
                <ul className="header-container">
                    {navbar_heading?.map((item, index) => (
                        <li className="header-listing" key={index}><a className="header-heading" href={item?.url}>{item.heading}</a></li>
                    ))}
                    <li className="header-listing"><a className="header-button">Contact Us</a></li>
                </ul>
            </div>


            <div className="mobile-container">
                {showHeader ? <button className="toggle-button" onClick={() => setShowHeader(!showHeader)}><img src={close} /></button> :
                    <button className="toggle-button" onClick={() => setShowHeader(!showHeader)}><img src={open} /></button>}
                {
                    showHeader && <ul className={`header-container ${showHeader ? 'active' : ''}`}>
                        {navbar_heading?.map((item, index) => (
                            <li className="header-listing" key={index}><a className="header-heading" href={item?.url}>{item.heading}</a></li>
                        ))}
                        <li className="header-listing"><a className="header-button">Contact Us</a></li>
                    </ul>
                }
            </div>
            <HeroComponent/>
            <AboutMe/>
            <Skills/>
        </>
    )
}

export default Header;