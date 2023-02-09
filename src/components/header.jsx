import React from "react"
import "../styles/header-style.css"
function Header()
{
    return (
        <div>
                <div className="header">
                <div className="header-text">
                    <h1>We Serve <br/>The Best Steak <br/>In Town</h1>
                    <button type="button" className="booking-button">
                        Book a table
                    </button>
                </div>
                <div className="header-img">
                    <img src="../images/header-img.svg" alt="" className="header-image"/>
                </div>
            </div> 
            <div className="our-story">
                <div className="our-story-images">
                    <div  className="Lower-images">
                        <img src="../images/our-story-1.svg"  alt="" className="our-story-img image1" />
                        <img src="../images/our-story-2.svg"  alt="" className="our-story-img" />
                    </div>
                    <div className="Higher-images">
                        <img src="../images/our-story-3.svg"  alt="" className="our-story-img" />
                        <img src="../images/our-story-4.svg"  alt="" className="our-story-img" />
                    </div>
                </div>
                <div className="our-story-text">
                    <h3 className="our-story-title">Our Story</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at enim mollis, congue erat at, faucibus tortor. Fusce pellentesque venenatis orci, vitae porttitor tellus faucibus et. Curabitur id placerat eros. Praesent condimentum nisi lacus, vel porttitor leo interdum ut. Curabitur et elementum risus. Morbi sed sodales nisi. Morbi scelerisque iaculis lorem non porttitor. Praesent sed facilisis dui, quis volutpat ipsum. Vestibulum nec ipsum ac turpis interdum bibendum. Donec ac neque neque. Aliquam sed 
                    </p>
                </div>
            </div>
        </div> 
    )
}

export default Header