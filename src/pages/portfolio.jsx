import React from 'react'

// Styles
import "../styles/App.css"
import "../styles/index.css"

import Contact from '../components/Contact'
import Navbar from "../components/Navbar"
import Portfolio from '../components/Portfolio';

function portfolio() {
    return (
        <div>
            <Navbar currPage={"portfolio"} />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default portfolio