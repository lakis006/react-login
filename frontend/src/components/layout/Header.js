import React from 'react'
import { Link } from "react-router-dom"
import AuthOptions from "../auth/AuthOptions"

function Header() {
    return (
        <div>
            <Link to="/">
                <h1>MERN auth </h1>
            </Link>

        </div>
    )
}

export default Header
