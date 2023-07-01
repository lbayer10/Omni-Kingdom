import React from "react";
import { Progress } from '@/components/progress';
import { progressList } from '@/@fake_db/home';

import "./style.css";

export const PlayerStates = () => {
    return (
        <div>
            <div className='player-drawer-state-title mx-auto flex justify-center items-center'>State</div>
            <div className='player-drawer-state mx-auto'>
                <ul>
                    <div className='mt-2'>
                        {
                            progressList.map(item => (<Progress color={item.color} label={item.label} currentAmount={item.currentAmount} totalAmount={item.totalAmount} />))
                        }
                    </div>
                    <li className='mt-4'>
                        <label>Str</label>
                        <span className='player-value font-green'>137</span>
                    </li>
                    <li>
                        <label>Int</label>
                        <span className='player-value font-green'>210</span>
                    </li>
                    <li>
                        <label>Dex</label>
                        <span className='player-value font-red'>14</span>
                    </li>
                    <li>
                        <label>Con</label>
                        <span className='player-value font-green'>150</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}