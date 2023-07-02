import React from "react";
import Image from "next/image";
import { PlayerStates } from "@/containers/player/states";
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
                        <div className="col-md-8">
                            <div className="crafts-hero-panel">
                                <div className="crafts-hero-title text-center">Hero</div>
                                <div className="crafts-hero-content row">
                                    <div className="col-md-4">
                                        <PlayerStates />
                                    </div>
                                    <div className="col-md-8">
                                        <div>

                                        </div>
                                        <Image className="m-auto" src="/assets/img/crafts/hero.png" width={320} height={200} alt="" />
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
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