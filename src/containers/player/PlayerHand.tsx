import React from "react";
import Image from "next/image";

import "./style.css";

interface PlayerHandProp {
    isShow: boolean,
    setIsShow: (value: boolean) => void
}

export const PlayerHand = ({
    isShow,
    setIsShow
}: PlayerHandProp) => {
    return (
        <div className='player-drawer-shorthand'>
            <Image className="player-image" width={75} height={70} src={require('../../assets/img/hero.png')} alt='hero' />
            <div className='flex justify-center'>
                <input className='hidden' type="checkbox" id="player-drawer-name" name="player-drawer-name" checked={isShow} onChange={e => setIsShow(e.target.checked)}/>
                <label htmlFor="player-drawer-name" className='text-center cursor-pointer player-drawer-name'>Lion</label>
            </div>
        </div>
    )
}