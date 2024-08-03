import React from "react";
import Nav from "./nav";

function Header(){
    return(
        <header className=" bg-[blue] flex justify-around items-center ">
            <h2 className="text-primary_color text-[4rem]">HelpemOUT</h2>
            <Nav />
        </header>
    )
}

export default Header