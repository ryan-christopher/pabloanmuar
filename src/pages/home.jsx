// Styles
import "../styles/App.css"
import "../styles/index.css"
//import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

import React from 'react'

function home() {
    return (
        <div>
            {/* <Link to="/styling">Style page</Link> */}

            {/* 
                Site colors
                "Eerie Black" - #222725
                "Alice Blue" - #e9f1f7
                "Mustard" - #f7ce5b
                "Gray" - #7c7c7c
                "Cinnabar" - #d1603d
            */}

            <Navbar />

            <div id="home" className="min-h-[100vh] w-[100vw] bg-[#222725]">

                <div className="text-white font-['Bungee_Shade'] absolute bottom-[20px] right-[30px] text-[40px] md:text-[70px]">
                    <div className="rotate-[-90deg] translate-x-[120px] translate-y-[-100px] md:translate-x-[210px] md:translate-y-[-170px]">Música</div>
                    <div>Trágame &#x2022;</div>
                </div>

            </div>

            <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#d1603d]">

            </div>

            <div id="about" className="min-h-[100vh] w-[100vw] bg-[#f7ce5b]">

            </div>

            <div id="contact" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7]">

            </div>
        </div>
    )
}

export default home