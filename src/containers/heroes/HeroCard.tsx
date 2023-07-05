import React from "react";
import "./style.css";

interface HeroCardProp {
    img: string,
    name: string
}

export const HeroCard = ({
    img,
    name
}: HeroCardProp) => {
    return (
        <div className="herocard-container" style={{background: `url(${img})`}}>
            <span className="herocard-name">{name}</span>
        </div>
    )
}