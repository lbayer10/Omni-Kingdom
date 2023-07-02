import React from "react";
import { InventoryBox } from "@/containers/inventory/InventoryBox";
import { inventoryList } from "@/@fake_db/crafts";

export const InventoryContainer = () => {
    return (
        <div className="inventory-container">
            <InventoryBox content={inventoryList} />
            <div className="inventory-counter mt-2">
                <label>Slots</label>
                <span className="ml-1">{inventoryList.length}/105</span>
            </div>
        </div>
    )
}