import React from "react"

function MenuCard(props)
{
    return (
        <div className="menu-block">
            <div className="firstOne">
            <div className="menu-text">
                <h1>
                    {props.item1}
                </h1>
                <br />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at enim mollis, congue erat at, faucibus tortor.
                </p>
            </div>
            <div className="menu-img">
                <img src={props.img1} alt="" className="menu-images"/>
            </div>
            </div>
            <div className="secondOne">
                <div className="menu-img">
                    <img src={props.img2} alt="" className="menu-images"/>
                </div>
                <div className="menu-text">
                    <h1>
                        {props.item2}
                    </h1>
                    <br />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at enim mollis, congue erat at, faucibus tortor.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default MenuCard