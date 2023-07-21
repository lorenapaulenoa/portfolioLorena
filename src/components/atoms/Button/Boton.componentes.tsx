import React from 'react'

interface BotonProps {
  text?: string,
  onClick?: () => void,
}

export const Boton: React.FC<BotonProps> = ({ onClick, text }) => {

  let style = 'rounded font-semibold text-xs sm:text-xl'
  
  return (
    <div>
      <button className={style} onClick={onClick}>{text}</button>
    </div>
  )
}
