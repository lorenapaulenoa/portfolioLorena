import React from 'react'



interface CardPequeProps {
    img?: string,
    text?: string,
}


export const CardPeque: React.FC<CardPequeProps> = ({ img, text }) => {
    return (
        <div className='border rounded-lg bg-stone-300 p-5  shadow-black shadow-md'>
            {text}
            <img src={img} />
            
        </div>
    )
}
