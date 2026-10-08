import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            {/* <a href='#'> Link </a> */}
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/">About</Link>
            <br></br>
            <Link to="/">Contact</Link>
        </div>
    )
}