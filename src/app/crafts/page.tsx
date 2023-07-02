import React from "react";
import Image from "next/image";
import { PlayerStates } from "@/containers/player/PlayerStates";
import { PlayerFlag } from '@/containers/player/PlayerFlag';
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
                        <div className="col-lg-8">
                            <div className="crafts-hero-panel">
                                <div className="crafts-hero-content row">
                                    <div className="col-lg-12 col-xl-4 flex flex-col justify-around">
                                        {/* <div>
                                            <ul className="crafts-ability">
                                                <li>
                                                    <Image src='/assets/img/personal/damage.svg' width={20} height={20} alt="" />
                                                    <span className="crafts-ability-value">43 - 50</span>
                                                </li>
                                                <li>
                                                    <Image src='/assets/img/personal/armor.svg' width={20} height={20} alt="" />
                                                    <span className="crafts-ability-value">17</span>
                                                </li>
                                                <li>
                                                    <Image src='/assets/img/personal/agility.svg' width={20} height={20} alt="" />
                                                    <span className="crafts-ability-value">324</span>
                                                </li>
                                            </ul>
                                        </div> */}
                                        <PlayerFlag />
                                        <PlayerStates />
                                    </div>
                                    <div className="col-lg-12 col-xl-7">
                                        <div className="crafts-hero-title text-center">Hero</div>
                                        <div className="flex justify-around">
                                            <div className="flex flex-col justify-around">
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                            </div>
                                            <Image className="m-0 crafts-model" src="/assets/img/crafts/hero.png" width={320} height={200} alt="" />
                                            <div className="flex flex-col justify-around">
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                                <div className="crafts-item"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="crafts-item-title text-center">Inventory</div>
                            <div className="crafts-item-panel">
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