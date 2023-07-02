'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from '@/components/progress';
import { PlayerStates } from '@/containers/player/states';
import LeftOutlined  from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

import './style.css';

interface PlayerDrawerProp {

}

export const PlayerCard = ({

}: PlayerDrawerProp) => {
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
                <Image className='player-hero-image' width={75} height={70} src={require('../../assets/img/hero.png')} alt='hero' />
                <div className='flex justify-center'>
                    <input className='hidden' type="checkbox" id="player-drawer-name" name="player-drawer-name" checked={isShow} onChange={e => setIsShow(e.target.checked)}/>
                    <label htmlFor="player-drawer-name" className='mt-[50px] text-center cursor-pointer player-drawer-name'>Lion</label>
                </div>
            </div>
            <div className='player-drawer' style={{display: isShow ? 'block' : 'none'}} ref={drawerRef}>
                <div className='player-drawer-head mx-auto pt-3 flex justify-between'>
                    <div>
                        <LeftOutlined />
                    </div>
                    <div>
                        <Image width={90} height={90} className='player-hero-drawer-image mx-auto' src={require('../../assets/img/hero.png')} alt='hero' />
                        <div className='text-center mt-[80px]'>Tyche</div>
                    </div>
                    <div>
                        <RightOutlined />
                    </div>
                </div>
                <div className='mb-4 mx-4'>
                    <div className='flex'>
                        <div className='player-drawer-level flex items-center justify-center'>Level</div>
                        <div className='player-drawer-level-content flex items-center justify-center'><span>24</span></div>
                    </div>
                    <div className='mt-2 mx-1'>
                        <Progress color='#FFD37E' label='' currentAmount={70} totalAmount={100} hidden />
                    </div>
                </div>

                <PlayerStates />
            </div>
        </div>
    )
}