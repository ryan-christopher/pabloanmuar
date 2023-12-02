import React from 'react'

// Styles
import "../styles/App.css"
import "../styles/index.css"

// Sections
import Landing from '../components/Landing'
import Featured from '../components/Featured'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Navbar from "../components/Navbar"

/* Site colors
"Eerie Black" - #222725
"Alice Blue" - #e9f1f7
"Mustard" - #f7ce5b
"Gray" - #7c7c7c
"Cinnabar" - #d1603d 
*/

function home() {
    return (
        <div className='p-0 m-0 overflow-hidden'>
            <Navbar />
            <Landing />
            <Featured />
            <Portfolio />
            <About />
            <Contact />
        </div>
    )
}
export default home