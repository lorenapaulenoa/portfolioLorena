

interface InputProps {
  text?: String,
  type?: 'text' | 'email' | 'password',
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: boolean,
  name?: string,
  value?: string,
  style?: string;
}

export const Input: React.FC<InputProps> = ({ text, type, error=false, onChange, value, name}) => {


  return (
    <>
      <label className="font-bold text-base text-black-600 underline mr-4" >{text}</label>
      <input value={value} name={name} type={type} onChange={onChange} className={error ? "border-red-500 border-solid border-2 rounded-lg ml-3 m-3 w-80" : "border-black border-solid border-2 rounded-lg ml-3 m-3 w-80" }/>
    </>
  )
}

