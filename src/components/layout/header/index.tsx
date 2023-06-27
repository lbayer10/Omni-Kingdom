import React from "react";
import Image from "next/image";
import { Menu } from "@/components/menu";
import "./style.css";

export const Header = () => {
    return (
        <div id="menu-wrap" className="header-container cbp-af-header black-menu-background-1st-trans menu-shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded h-[50px]">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavMenuMain" aria-controls="navbarNavMenuMain" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="header-brand">
                                
                            </a>
                            <Menu />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}