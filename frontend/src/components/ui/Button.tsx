import type { ReactElement } from "react"

interface ButtonProps{
    variant : "primary" | "secondary",
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: () => void
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const defaultStyles = " m-1 rounded-md flex items-center"

const sizeStyles = {
    "sm": "py-1 px-3",
    "md": "py-1 px-4",
    "lg": "py-1  px-6"
}


export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-1">{props.startIcon}</div> : null}{props.text}{props.endIcon}</button>
}

