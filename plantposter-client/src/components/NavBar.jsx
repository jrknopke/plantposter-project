import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <li><NavLink to= "/home">Home</NavLink></li>
                <li><NavLink to= "/plants">Plants</NavLink></li>  
                <li><NavLink to= "/plants/new">Add New Plant</NavLink></li>  
                <li><NavLink to= "/trees"> Trees </NavLink></li>                                                                                                                                                                                                                                   
            </nav>
        </div>
    )
}

export default NavBar