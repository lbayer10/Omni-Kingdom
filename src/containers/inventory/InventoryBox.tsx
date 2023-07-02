import React from "react";
import { InventoryCard } from "./InventoryCard";

import "./style.css";

type InventoryType = {
    name?           :       string,
    type?           :       string,
    price?          :       number,
    damage?         :       number  |   string,
    armor?          :       number,
    agility?        :       number,
    src             :       string
}

interface InventoryBoxProp {
    content: Array<InventoryType>
}

export const InventoryBox = ({
    content 
}: InventoryBoxProp) => {
    return (
        <div className="inventorybox-container">
            <div className="inventorybox-panel">
                {
                    content?.map((item, index) => (
                        <InventoryCard key={index} src={item.src} />
                    ))
                }
            </div>
        </div>
    )
}