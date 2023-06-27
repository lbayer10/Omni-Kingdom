import React from "react";
import "./style.css";

interface ButtonProp {
    type?: 'primary' | 'default',
    children: React.ReactNode
}

export const Button = ({
    type,
    children
}: ButtonProp) => {
    return (
        <button className="button">{children}</button>
    )
}