import { ReactNode } from "react"

type Props = {
    children: ReactNode
    handleClick: () => void
}

const SliderButton = ({ children, handleClick }: Props) => {
    return (
        <button
            className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default SliderButton