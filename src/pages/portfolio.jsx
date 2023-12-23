import React from 'react'

// Styles
import "../styles/App.css"
import "../styles/index.css"

import Contact from '../components/Contact'
import Navbar from "../components/Navbar"
import MusicEntry from '../components/MusicEntry';
import Video from '../components/Video';

function portfolio() {
    return (
        <div>
            <Navbar />

            <Contact />
        </div>
    )
}

export default portfolio