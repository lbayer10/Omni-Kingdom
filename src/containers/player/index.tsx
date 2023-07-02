'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/progress';
import { PlayerHand } from '@/containers/player/PlayerHand';
import { PlayerFlag } from '@/containers/player/PlayerFlag';
import { PlayerStates } from '@/containers/player/PlayerStates';

import './style.css';

interface PlayerDrawerProp {

}

export const PlayerContainer = ({

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
            <PlayerHand isShow={isShow} setIsShow={setIsShow} />
            <div className='player-drawer' style={{display: isShow ? 'block' : 'none'}} ref={drawerRef}>
                <PlayerFlag />
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