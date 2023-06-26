import React from "react";
import "./style.css";

interface ProgressProp {
    label: string,
    color?: string,
    currentAmount: number,
    totalAmount: number,
    hidden?: boolean
}

export const Progress = ({
    label,
    color,
    currentAmount,
    totalAmount,
    hidden
}: ProgressProp) => {
    const hide = hidden && 'hidden';

    return (
        <div className={["progress-bar-container text-base my-[8px]"].join(' ')} style={{color: color}}>
            <div className="flex justify-between">
                <div className="progress-bar-label">{label}</div>
                <div className="progress-bar-value flex">
                    <span className={`${hide}`}>{currentAmount}</span>
                    <span className={`${hide}`}>/{totalAmount}</span>
                </div>
            </div>
            <div className="progress-bar-panel h-[5px] rounded-sm bg-black">
                <div className="progress-bar-content h-[5px] rounded-sm" style={{backgroundColor: color, width: `${currentAmount/totalAmount*100}%`}}></div>
            </div>
        </div>
    )
}