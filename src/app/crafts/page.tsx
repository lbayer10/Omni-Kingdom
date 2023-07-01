import React from "react";
import { InventoryContainer } from "@/containers/inventory";

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
                                <div className="crafts-hero-title"></div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="crafts-item-panel">
                                <div className="crafts-item-title"></div>
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