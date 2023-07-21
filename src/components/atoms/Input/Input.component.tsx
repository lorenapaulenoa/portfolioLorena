
import React from 'react'


interface InputProps {
  labelText?: string,
  value?: string,
  type?: "text" | "password" | "email",
  error?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


export const Input: React.FC<InputProps> = ({ labelText, value, type = "text", onChange }) => {
  return (
    <>
      <label className="font-semibold">{labelText}</label>
      <input onChange={onChange} type={type} value={value} className='text-xs sm:text-xl' />
    </>
  )
}
