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
            <div className='player-drawer-shorthand'>
                <Image className='w-20 h-[70px]' src={require('../../assets/img/hero.png')} alt='hero' />
                <div className='flex justify-center'>
                    <input className='hidden' type="checkbox" id="player-drawer-name" name="player-drawer-name" checked={isShow} onChange={e => setIsShow(e.target.checked)}/>
                    <label htmlFor="player-drawer-name" className='mt-[50px] text-center cursor-pointer player-drawer-name'>Lion</label>
                </div>
            </div>
            <div className='player-drawer' style={{display: isShow ? 'block' : 'none'}} ref={drawerRef}>
                <div className='player-drawer-head mx-auto pt-3'>
                    <Image className='mx-auto w-[90px] h-[90px]' src={require('../../assets/img/hero.png')} alt='hero' />
                    <div className='text-center mt-[80px]'>Tyche</div>
                </div>
                <div className='flex mb-3 mx-4'>
                    <div className='player-drawer-level flex items-center justify-center'>Level</div>
                    <div className='player-drawer-level-content flex items-center justify-center'><span>24</span></div>
                </div>
                <div>
                    <div className='player-drawer-state-title mx-auto flex justify-center items-center'>State</div>
                    <div className='player-drawer-state mx-auto'>
                        <ul>
                            <li>
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
        </div>
    )
}