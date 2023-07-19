import React from 'react';

interface CardPequeProps {
    img?: string,
    text?: string,
    url?: string,
}


export const CardPeque2: React.FC<CardPequeProps> = ({ img, text, url }) => {
    return (
        <div className='border rounded-lg bg-stone-100 p-5  shadow-black shadow-md mt-8 mb-12 ml-4 mr-4' >
            <a href={url} target='_blank'>
                {text}
                <img src={img} />
            </a>
        </div>
    )
}
