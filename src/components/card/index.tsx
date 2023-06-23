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
    align?: 'left' | 'center' | 'right';
    className: string,
    children: React.ReactNode;
}

const HeroCard: FC<HeroCardProps> = memo(({ content, className }: HeroCardProps) => {
    return (
        <div className="border-on-light text-center">
            <Image className={['herocard', className].join(' ')} src={content?.src} width='300' height='300' alt='hero-card' />
            <h5 className="mt-5 herocard-name">{content?.name}</h5>	
            <div className="mt-4 mb-4 text-left herocard-text">{content?.description}</div>	
        </div>
    )
});

// const WeaponCard: FC<WeaponCardProps> = memo(({ className, children }: WeaponCardProps) => {
    // return <p className={[className, `typography-text-${level}`, `text-${align}`].join(' ')}>{children}</p>
// });

export const Card = () => {
    return { HeroCard }
}