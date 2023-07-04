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
        <div>
            {
                title &&
                <div className="content-head">
                    {title}
                </div>
            }
            <div className={["content-container", className].join(" ")}>
                <div className="content-body flex flex-col justify-between">
                    <div>hello world</div>
                    <div className="content-list h-[600px] overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}