import React from 'react'
import { useHistory } from "react-router-dom"

export default function AuthOptions() {
    const history = useHistory();
    //register and history are working like a Link works. it changes the current url
    const register = () => history.push("/register")
    const login = () => history.push("/login")
    return (
        <nav className="auth-options">
            <button onClick= {register}>Register</button>
            <button onClick={login}>Log in</button>
            
        </nav>
    )
}
