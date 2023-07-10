import React from "react";
import "./style.css";

interface ContainerProp {
    title?: string;
    width?: number;
    height?: number;
    children?: React.ReactNode;
    className?: string;
}

export const Container = ({
    title,
    children,
    className
}: ContainerProp) => {
    return (
        <div className="container">
            {
                title &&
                <div className="content-head">
                    {title}
                </div>
            }
            <div className={["content-container", className].join(" ")}>
                <div className="content-body flex flex-col justify-between">
                    <div className="content-list h-[650px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}