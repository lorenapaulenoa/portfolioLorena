import React from 'react'
import { Forecast, Tiempo, Icon, Forecastday } from '../../../App';


interface CardPequeProps {
    day: Forecastday,
}


export const CardPeque: React.FC<CardPequeProps> = ({ day }) => {
    return (
        <div key={day.date} className='border rounded-lg bg-stone-300 p-5  shadow-black shadow-md'>
            <h1>{day.date}</h1>
            <img src={day.day.condition.icon} />
            <h1> Temp. max.: {day?.day.maxtemp_c}</h1>
            <h1>Temp. min.: {day?.day.mintemp_c}</h1>
        </div>
    )
}
