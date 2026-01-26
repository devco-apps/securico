interface IProps {
    text: string
    className?: string
}

const Heading = ({ text, className = "" }: IProps) => {
    return (
        <h4 className={`font-bold text-white text-sm uppercase ${className}`}>
            {text}
        </h4>
    )
}

export default Heading;