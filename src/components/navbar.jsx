import React from "react"
import "../styles/navbar-style.css"
function Navbar()
{
    return (
        <nav>
            <div className="navbar-brand">
                <img src = "../images/Logo.svg"/>
            </div>
            <div className="navbar-menu">
                <ul className="nav-item">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;