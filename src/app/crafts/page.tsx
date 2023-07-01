import React from "react";
import { InventoryContainer } from "@/containers/inventory";
import { Progress } from '@/components/progress';
import { progressList } from '@/@fake_db/home';

import "./style.css";

export default () => {
    return (
        <div>
            <div className="section h-screen over-hide">
                <div className="parallax" style={{ backgroundImage: 'url(assets/img/crafts-bg.jpg)', backgroundPosition: '50% -50px', filter: 'grayscale(.5)' }}></div>
                <div className="grey-fade-over"></div>
                <div className="crafts-content container">
                    <div className="row justify-center">
                        <div className="col-md-7">
                            <div className="crafts-hero-panel">
                                <div className="crafts-hero-title text-center">Hero</div>
                                <div className="crafts-hero-content row">
                                    <div className="col-md-5">
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
                                    </div>
                                    <div className="col-md-7">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="crafts-item-panel">
                                <div className="crafts-item-title text-center">Inventory</div>
                                <div className="crafts-item-content">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}