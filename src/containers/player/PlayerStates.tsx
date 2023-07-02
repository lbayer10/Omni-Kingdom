import React from "react";
import { Progress } from '@/components/progress';
import { progressList, statesList } from '@/@fake_db/home';

import "./style.css";

export const PlayerStates = () => {
    return (
        <div>
            <div className='player-drawer-state-title mx-auto flex justify-center items-center'>State</div>
            <div className='player-drawer-state mx-auto'>
                <ul>
                    <div className='mt-2'>
                        {
                            progressList.map((item, index) => (<Progress key={index} color={item.color} label={item.label} currentAmount={item.currentAmount} totalAmount={item.totalAmount} />))
                        }
                    </div>
                    {
                        statesList?.map((item, index) => (
                            <li key={index} className={`mt-${!index && 4}`}>
                                <label>{item.label}</label>
                                <span className='player-value font-green'>{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}