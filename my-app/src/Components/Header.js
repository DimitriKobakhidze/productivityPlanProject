import React from "react";
import brainLogo from "../Images/brainLogo2.png"
import {GiBrain} from "react-icons/gi"


export default function Header(){
    return(
        <header className="main-header">
            <h1 className="header-caption">Productivity Plan</h1>
            <GiBrain className="brain-icon" />
            {/* Manage your time to be more productive,create and follow your plan here */}
        </header>
    )
}