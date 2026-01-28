
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface ButtonProps {
    text: string
    aria?: string
    className?: string
    onClick?: () => void
    icon?: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
    text,
    aria = "",
    className,
    onClick,
    icon,
    type = 'button',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            aria-label={aria}
            className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-primary group ${className}`}
        >
            <span className="absolute top-0 left-0 w-full h-full bg-secondary opacity-0 group-hover:opacity-20 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
            <span className="relative flex items-center">
                {text}
                {icon ? icon : <IoIosArrowForward className="w-5 h-5 ml-2" />}
            </span>
        </button>
    )
}

export default Button
