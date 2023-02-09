import React from "react"
import "../styles/header-style.css"
function Header()
{
    return (
        <div className="header">
            <div className="header-text">
                <h1>We Serve <br/>The Best Steak <br/>In Town</h1>
                <button>
                    Book a table
                </button>
            </div>
            <div className="header-img">
                <img src="../images/header-img.svg" alt="" className="header-image"/>
            </div>
        </div>   
    )
}

export default Header