import React, { FC, memo } from "react";
import Image from "next/image";

import "./style.css";

type CardType = {
    name: string,
    description: string,
    src: string
}

interface CardProps {
    content: CardType;
    className: string;
}

const HeroCard: FC<CardProps> = memo(({ content, className }: CardProps) => {
    return (
        <div className="hero-card border-on-light text-center">
            <Image className={['herocard', className].join(' ')} src={content?.src} width='300' height='300' alt='hero-card' />
            <h5 className="mt-5 herocard-name">{content?.name}</h5>	
            <div className="mt-4 mb-4 text-left herocard-text">{content?.description}</div>
        </div>
    )
});

const WeaponCard: FC<CardProps> = memo(({ content, className }: CardProps) => {
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

const AuthorCard: FC<CardProps> = memo(({ content, className }: CardProps) => {
    return (
        <div className="author-card border-on-light text-center px-3">
            <Image className={['authorcard', className].join(' ')} src={content?.src} width='150' height='150' alt='author-card' />
            <div className="author-card-item">
                <div className="mt-5 text-center authorcard-text">{content?.description}</div>	
                <h3 className="authorcard-name mt-4">{content?.name}</h3>	
            </div>
        </div>
    )
});

export const Card = () => {
    return { HeroCard, WeaponCard, AuthorCard }
}