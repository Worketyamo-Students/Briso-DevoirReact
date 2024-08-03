import React from "react";
import Nav from "./nav";
import { CiSearch } from "react-icons/ci";
import Button from "./button";

function Header(){
    return(
        <header className=" bg-[blue] flex justify-around items-center ">
            <h2 className="text-primary_color text-[4rem]">HelpemOUT</h2>
            <Nav />
            <div className="flex justify-center items-center gap-[1.6rem]">
            <CiSearch/>
            <Button name="login" type="submit"/>
            </div>
        </header>
    )
}

export default Header