import React, { FC, memo } from "react";
import Image from "next/image";

import "./style.css";

type HeroType = {
    name: string,
    description: string,
    src: string
}

interface HeroCardProps {
    content: HeroType;
    className: string;
}

interface WeaponCardProps {
    content: HeroType;
    className: string;
}

const HeroCard: FC<HeroCardProps> = memo(({ content, className }: HeroCardProps) => {
    return (
        <div className="hero-card border-on-light text-center">
            <Image className={['herocard', className].join(' ')} src={content?.src} width='300' height='300' alt='hero-card' />
            <h5 className="mt-5 herocard-name">{content?.name}</h5>	
            <div className="mt-4 mb-4 text-left herocard-text">{content?.description}</div>	
        </div>
    )
});

const WeaponCard: FC<WeaponCardProps> = memo(({ content, className }: WeaponCardProps) => {
    return (
        <div className="weapon-card border-on-light text-center">
            <Image className={['weaponcard', className].join(' ')} src={content?.src} width='300' height='300' alt='hero-card' />
            <div className="weapon-card-item">
                <h3 className="weaponcard-name">{content?.name}</h3>	
                <div className="mt-2 text-left weaponcard-text">{content?.description}</div>	
            </div>
        </div>
    )
});

export const Card = () => {
    return { HeroCard, WeaponCard }
}