import React from 'react'
import "../styles/App.css"
import "../styles/index.css"
import Contact from '../components/Contact'
import Navbar from "../components/Navbar"
import Biography from '../components/Biography'

function bio() {
    return (
        <div>
            <Navbar currPage={"bio"} />
            <Biography />
            <Contact />
        </div>
    )
}

export default bio