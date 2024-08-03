import React from "react";

function Nav(){
    return(
        <nav className="bg-[red]">
            <ul className="font-medium text-[1.8rem] flex gap-[4rem] text-nav_color">
                <li>Home</li>
                <li>About us</li>
                <li>Institutions</li>
                <li>Library</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Nav