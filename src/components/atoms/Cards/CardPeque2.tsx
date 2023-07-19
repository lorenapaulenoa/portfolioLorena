import React from 'react';

interface CardPequeProps {
    img?: string,
    text?: string,
    url?: string,
}


export const CardPeque2: React.FC<CardPequeProps> = ({ img, text, url }) => {
    return (
        <div className='border-2 rounded-lg bg-teja hover:bg-gradient-to-r from-teja to-beige p-5 shadow-black shadow-md mt-8 mb-12 ml-4 mr-4' >
            <a href={url} target='_blank'>
                {text}
                <img src={img} />
            </a>
        </div>
    )
}
