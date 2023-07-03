import React from "react";
import "./style.css";

interface ButtonProp {
    type?: 'primary' | 'default' | 'secondary',
    children: React.ReactNode
}

export const Button = ({
    type,
    children
}: ButtonProp) => {
    return (
        <button className={["button", `button-${type}`].join(' ')}>{children}</button>
    )
}