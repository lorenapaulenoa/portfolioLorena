import React from 'react'

interface BotonProps {
  text?: string,
  onClick?: () => void,
}

export const Boton: React.FC<BotonProps> = ({ onClick, text }) => {

  let style = 'py-2 px4 rounded font-semibold'
  
  return (
    <div>
      <button className={style} onClick={onClick}>{text}</button>
    </div>
  )
}
