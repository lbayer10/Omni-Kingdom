import React from "react";
import Image from "next/image";

interface InventoryCardProp {
    src: string
}

export const InventoryCard = ({
    src
}: InventoryCardProp) => {
    return (
        <div className="inventorycard-container">
            <Image src={src} width={43} height={43} alt="inventory card image" />
        </div>
    )
}