import React from "react"
import MenuData from "../menu"
import MenuCard from "./MenuCard"

function MenuMap(Data)
{
    return (
        <MenuCard 
            item1 = {Data.item1}
            img1 = {Data.img1}
            item2 = {Data.item2}
            img2 = {Data.img2}
        />
    )
}
function Menu()
{
    return (
        <div className="Menu-section">
            <div className="menu-title">
                <div>
                    <h4>
                        Discover
                    </h4>
                    <h2>
                        Our Menu
                    </h2>
                </div>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at enim mollis, congue erat at, faucibus tortor.
                </div>
            </div>
            <div className="menu-items">
                {Menu.map(MenuMap)}
            </div>
        </div>
    )
}

export default Menu;