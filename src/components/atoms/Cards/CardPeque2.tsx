import React from 'react';

interface CardPequeProps {
    img?: string,
    text?: string,
    url?: string,
}


export const CardPeque2: React.FC<CardPequeProps> = ({ img, text, url }) => {
    return (
        <div className=' flex border-2 rounded-lg bg-beige hover:bg-gradient-to-r from-teja to-beige shadow-black p-1 shadow-md  text-xs sm:text-xl ' >
            <a href={url} target='_blank' className='flex flex-row justify-between w-full items-center'>
                {text}
                <img className='h-4' src={img} />
            </a>
        </div>
    )
}
