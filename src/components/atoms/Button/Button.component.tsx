interface ButtonProps {
    text?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}


export const Button: React.FC<ButtonProps> = ({ text, type = "submit", onClick }) => {

    let style = 'py-2 px-4 border-black rounded border-2 font-semibold mt-2 mb-4 bg-beige hover:bg-gradient-to-r from-teja to-beige mx-3 text-xs sm:text-lg'

    

    return (
        <button type={type} className={style} onClick={onClick} >{text}</button>
    )
}
