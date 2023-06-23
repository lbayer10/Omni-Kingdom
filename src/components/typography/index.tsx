import React, { FC, memo } from "react";
import './style.css';

interface TitleProps {
    level?: 'primary' | 'default';
    align?: 'left' | 'center' | 'right';
    className: string,
    children: React.ReactNode;
}

interface ParagraphProps {
    level?: 'primary' | 'default';
    align?: 'left' | 'center' | 'right';
    className: string,
    children: React.ReactNode;
}

const Title: FC<TitleProps> = memo(({ level = 'default', align = 'left', className, children }: TitleProps) => {
    return <h2 className={[className, `typography-title-${level}`, `text-${align}`].join(' ')}>{children}</h2>
});

const Paragraph: FC<ParagraphProps> = memo(({ level = 'default', align, className, children }: ParagraphProps) => {
    return <p className={[className, `typography-text-${level}`, `text-${align}`].join(' ')}>{children}</p>
});

export const Typography = () => {
    return { Title, Paragraph }
}