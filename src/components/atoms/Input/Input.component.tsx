
import React from 'react'


interface InputProps {
  labelText?: string,
  value?: string,
  type?: "text" | "password" | "email",
  error?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


export const Input: React.FC<InputProps> = ({ labelText, value, type = "text", error = false, onChange }) => {
  return (
    <>
      <label className="font-semibold">{labelText}</label>
      <input onChange={onChange} type={type} value={value} className={error ? "rounded p2 mb1 border-red-500 border-solid border-2" : "rounded p-2 -mb-1"} />
    </>
  )
}
