import React from "react";

function Nav() {
    return (
        <nav>
            <ul className="font-medium text-[1.8rem] flex gap-[4rem] text-nav_color">
                <a href=""><li>Home</li></a>
                <a href=""><li>About us</li></a>
                <a href=""><li>Institutions</li></a>
                <a href="">  <li>Library</li></a>
                <a href=""><li>Projects</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
        </nav>
    )
}
export default Nav