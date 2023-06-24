'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './style.css';

export const PlayerDrawer = () => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [isShow, setIsShow] = useState(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        if (isShow) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    return (
        <div>
            {/* <div className='omni-player-point'>
                <Image className='w-20 h-[70px]' src={require('../../assets/img/hero.png')} alt='hero' />
                <div className='flex justify-center'>
                    <input className='hidden' type="checkbox" id="omni-player-toggle" name="omni-player-toggle" checked={isShow} onChange={e => setIsShow(e.target.checked)}/>
                    <label htmlFor="omni-player-toggle" className='mt-10 text-center cursor-pointer omni-player-hero'>Lion</label>
                </div>
            </div> */}
            <div className='player-drawer' style={{display: isShow ? 'none' : 'block'}} ref={drawerRef}>
                <div className='player-drawer-head mx-auto pt-3'>
                    <Image className='mx-auto w-[90px] h-[90px]' src={require('../../assets/img/hero.png')} alt='hero' />
                    <div className='player-drawer-name text-center mt-[80px]'>Tyche</div>
                </div>
                <div className='flex mb-3 mx-4'>
                    <div className='player-drawer-level text-center'>Level</div>
                    <div className='player-drawer-level-content text-center'>24</div>
                </div>
                <div>
                    <div className='player-drawer-state mx-auto'>
                        <div className='player-drawer-state-title mx-auto'>State</div>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}