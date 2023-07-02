'use client'

import React from "react";
import Image from "next/image";

export const PlayerFlag = () => {
    return (
        <div className='player-drawer-head mx-auto pt-3'>
            <Image width={90} height={90} className='player-hero-drawer-image mx-auto' src={require('../../assets/img/hero.png')} alt='hero' />
            <div className='text-center mt-[80px]'>Tyche</div>
        </div>
    )
}