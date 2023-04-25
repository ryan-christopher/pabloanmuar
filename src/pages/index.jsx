// Styles
import "../styles/App.css"
import "../styles/index.css"
import { Link } from "react-router-dom"


import React from 'react'

function index() {
    return (
        <div>
            <Link to="/styling">Style page</Link>
        </div>
    )
}

export default index