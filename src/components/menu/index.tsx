import React from "react";
import Link from "next/link";
import "./style.css";

import { _ROUTERS } from "@/routes";

export const Menu = () => {
    return (
        <div className="navbar-collapse justify-content-end" id="navbarNavMenuMain">
            <ul className="navbar-nav">
                {
                    _ROUTERS.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link href={item.path} className="menu-link">{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}