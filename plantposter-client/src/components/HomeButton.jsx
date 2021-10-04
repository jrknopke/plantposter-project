import React from "react";
import { NavLink } from "react-router-dom";

const HomeButton = () => {
    return (
        <NavLink to="/home">
            <button type = "button"> Home </button>
        </NavLink>
    )
}

export default HomeButton