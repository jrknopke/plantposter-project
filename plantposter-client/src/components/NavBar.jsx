import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav_bar'>
            <nav>
                <li><NavLink to= "/home">Home</NavLink></li>
                <li><NavLink to= "/plants">Plants</NavLink></li>  
                <li><NavLink to= "/plants/new">Add New Plant</NavLink></li>                                                                                                                                                                                                                                  
            </nav>
        </div>
    )
}

export default NavBar