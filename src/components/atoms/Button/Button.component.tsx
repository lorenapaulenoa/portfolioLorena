interface ButtonProps {
    text?: string,
    color?: 'orange' | 'white' | 'green',
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}


export const Button: React.FC<ButtonProps> = ({ text, color, type = "submit", onClick }) => {

    let style = 'py-2 px-4 border-black rounded border-2 font-semibold mt-10'

    return (
        <button type={type} className={style} onClick={onClick} color={color}>{text}</button>
    )
}
