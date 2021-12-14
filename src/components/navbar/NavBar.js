import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
           <ul>
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/apple">Apple</NavLink></li>
               <li><NavLink to="/tesla">Tesla</NavLink></li>
            </ul> 
        </nav>
    )
}

export default NavBar
